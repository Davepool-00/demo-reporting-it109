-- Group 2 IT 109 RPC demo
-- Run in Supabase Dashboard -> SQL Editor.
-- Demonstration function: accepts two integers and returns their sum.

create or replace function public.add_numbers(a integer, b integer)
returns integer
language sql
immutable
as $$
  select a + b;
$$;

-- Depending on your project's grants/settings, expose execution to the anon role for this classroom demo.
-- Do not grant broad access to sensitive functions in a production project.
grant execute on function public.add_numbers(integer, integer) to anon, authenticated;

-- Optional: verify inside SQL Editor (this SQL call is local to the database, not the browser RPC demo).
select public.add_numbers(5, 3) as expected_result;
