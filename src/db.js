import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://whalwlwjkggeayyloizs.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndoYWx3bHdqa2dnZWF5eWxvaXpzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ2MTcxNjgsImV4cCI6MjA2MDE5MzE2OH0.JNGlmJzYb1lLFBvjcycjwRNv9oIM17qtJPoLa_MwB2Q'
const supabase = createClient(supabaseUrl, supabaseKey)
