Start with this prompt. Adapt it for whichever API idea you picked:
I want to build a simple API product using Next.js and Vercel.
The API does one thing: Convert HTML to PDF.

Tech stack:
Next.js with App Router
TypeScript
Vercel for deployment
Supabase for the database (to track API keys and usage)

I need:
1. A Next.js project with a single API route at /api/v1/convert-to-pdf
2. API key authentication via an x-api-key header
3. A Supabase table called "api_keys" with columns: id, key, email, created_at, requests_used, requests_limit
4. A Supabase table called "usage_logs" with columns: id, api_key_id, endpoint, created_at
5. Middleware that checks the API key, increments usage, and rejects if over limit
6. The actual endpoint logic that processes the request and returns the result
7. A simple landing page at / that explains the API with a code example

Do NOT write any code yet. First, outline the file structure and database schema so I can review it.
