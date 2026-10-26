// Alternative client snippet using @supabase/supabase-js.
// In a real app, install @supabase/supabase-js and provide your project URL + anon/publishable key.
// Never use a service_role key in frontend code.

import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://lwqbenuodlcuyolpvgnn.supabase.co',
  'sb_publishable_aP8sZCTQQvPl_OigMEO2Qw_G36fOh1M'
);

async function callAddNumbers() {
  const timeoutMs = 8000;
  const timeout = new Promise((_, reject) =>
    setTimeout(() => reject(new Error('RPC timed out after 8 seconds')), timeoutMs)
  );

  try {
    const call = supabase.rpc('add_numbers', { a: 5, b: 3 });
    const { data, error } = await Promise.race([call, timeout]);
    if (error) throw error;
    console.log('RPC result:', data); // expected 8
    return data;
  } catch (error) {
    console.error('RPC failed:', error.message);
    throw error;
  }
}

callAddNumbers();
