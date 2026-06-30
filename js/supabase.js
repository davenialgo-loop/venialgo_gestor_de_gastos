const SUPABASE_URL = 'https://umodatusvvpbgolrizrc.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVtb2RhdHVzdnZwYmdvbHJpenJjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODI3NjcyOTYsImV4cCI6MjA5ODM0MzI5Nn0.SCyHueIKSMOP_lZBaTesagWorPvN351X3_naQ2Y3NCA';

const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

if (!supabase.auth) {
    console.error('Supabase client created without auth property. Falling back to direct auth API.');
}
