GROUP 2 RPC DEMO — QUICK START

WHAT YOU NEED
- A Supabase project you are allowed to use.
- Project URL and anon/publishable key (NOT service_role).
- Internet connection and a modern browser.

STEP 1 — Create the database function
1. Open Supabase Dashboard and select your project.
2. Open SQL Editor -> New query.
3. Paste and run supabase_function.sql.
4. Confirm the query returns 8 for add_numbers(5, 3).

STEP 2 — Open the client demo
1. Open index.html in a browser (Chrome/Edge/Firefox).
2. Enter Project URL and anon/publishable key.
3. Select Success and click Call RPC. Expected response data: 8.
4. Select Wrong function name and click Call RPC. Capture the actual error/status.
5. Select Invalid type and click Call RPC. Capture the actual error/status.
6. Explain each error and fix it.

WHAT TO SAY
- The browser is the client.
- The POST request to /rest/v1/rpc/add_numbers is the remote call.
- Supabase/PostgREST routes the request; PostgreSQL executes the function.
- The response returns the function result to the client.
- The SQL Editor's SELECT is only a setup sanity check; the live browser call is the RPC demo.

IMPORTANT
- Never paste a service_role key into index.html or any browser code.
- This demo uses a direct fetch to the Supabase REST RPC endpoint; it demonstrates the same server-side RPC concept as supabase.rpc('add_numbers', { a: 5, b: 3 }).
- Depending on your project's API exposure, grants, and schema configuration, errors/status codes may vary.
- If function changes are not visible immediately, check Supabase API settings/schema cache and reload.
- Do not promise an exact status code until you have tested your own project.
