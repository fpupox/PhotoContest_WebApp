import { createClient } from `@supabase/supabase-js`

export const supabase = createClient(
    "https://kcrvlybhthtqimkfvcyb.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtjcnZseWJodGh0cWlta2Z2Y3liIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI3OTc3MDIsImV4cCI6MjAyODM3MzcwMn0.VuHPmH1fCtKvuvaHTAX5hrOHauIUAwDu6rf2C_vgCkk"
)