import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabaseUrl = 'https://kcrvlybhthtqimkfvcyb.supabase.co';
const supabaseKey = 'YeyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtjcnZseWJodGh0cWlta2Z2Y3liIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI3OTc3MDIsImV4cCI6MjAyODM3MzcwMn0.VuHPmH1fCtKvuvaHTAX5hrOHauIUAwDu6rf2C_vgCkk';
export const supabase = createClient(supabaseUrl, supabaseKey);