import { createClient } from "@supabase/supabase-js/"

const supaBaseUrl = "https://fljqjufwintpfkcqsdba.supabase.co"
const supaBaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZsanFqdWZ3aW50cGZrY3FzZGJhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk1NTk2ODksImV4cCI6MjAyNTEzNTY4OX0.xGvphXtDS_9T-JU1FWWHqUjH187vaYxgjKzTb5MREi0"

export const supabase = createClient(supaBaseUrl, supaBaseAnonKey)