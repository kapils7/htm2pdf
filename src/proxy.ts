import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { supabase } from './lib/supabase'

export async function proxy(request: NextRequest) {
  // Only apply to our actual API endpoints
  if (request.nextUrl.pathname.startsWith('/api/v1/')) {
    const apiKey = request.headers.get('x-api-key')

    if (!apiKey) {
      return NextResponse.json({ error: 'Missing x-api-key header' }, { status: 401 })
    }

    // Check if the API key is valid
    const { data: keyData, error: keyError } = await supabase
      .from('api_keys')
      .select('*')
      .eq('key', apiKey)
      .single()

    if (keyError || !keyData) {
      return NextResponse.json({ error: 'Invalid API key' }, { status: 401 })
    }

    // Check usage limit
    if (keyData.requests_used >= keyData.requests_limit) {
      return NextResponse.json({ error: 'API key usage limit exceeded' }, { status: 429 })
    }

    // Log the usage for auditing
    await supabase.from('usage_logs').insert({
      api_key_id: keyData.id,
      endpoint: request.nextUrl.pathname
    })

    // Increment usage. 
    // In production with high concurrency, you'd use a Postgres RPC for atomic increments:
    // await supabase.rpc('increment_usage', { row_id: keyData.id })
    await supabase
      .from('api_keys')
      .update({ requests_used: keyData.requests_used + 1 })
      .eq('id', keyData.id)
  }

  const response = NextResponse.next()
  
  // CORS Headers
  response.headers.set('Access-Control-Allow-Origin', '*')
  response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization, x-api-key')
  
  return response
}

export const config = {
  matcher: '/api/v1/:path*',
}
