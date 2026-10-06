import { createClient } from "@supabase/supabase-js";

export const clientSupabase = createClient(
    process.env.SUPABASE_API_KEY,
    process.env.POBLISH_SUPABASE_KEY
    )
    console.log("supabase connected")

