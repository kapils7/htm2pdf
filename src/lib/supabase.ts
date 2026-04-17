import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!

// We use the service role key for admin tasks like verifying API keys and usage
export const supabase = createClient(supabaseUrl, supabaseServiceKey)
