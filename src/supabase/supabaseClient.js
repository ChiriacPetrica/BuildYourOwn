import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://hnalinrktyxfhbzjjivo.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhuYWxpbnJrdHl4ZmhiempqaXZvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjYwNDcyMjMsImV4cCI6MjA0MTYyMzIyM30.sD5mW7s10f9br21XgsRlL1q84x8G4iWjB6Pey9uM5xI";

export const supabase = createClient(supabaseUrl, supabaseKey);
