import "@/styles/globals.css";
import { createPagesBrowserClient } from '@supabase/auth-helpers-nextjs'
import { SessionContextProvider } from '@supabase/auth-helpers-react'
import { useState } from 'react'

export default function MyApp({ Component, pageProps }) {
  // Create a new supabase browser client on every first render.
  const [supabaseClient] = useState(() => createPagesBrowserClient({
    supabaseUrl: 'https://kcrvlybhthtqimkfvcyb.supabase.co',
    supabaseKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtjcnZseWJodGh0cWlta2Z2Y3liIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI3OTc3MDIsImV4cCI6MjAyODM3MzcwMn0.VuHPmH1fCtKvuvaHTAX5hrOHauIUAwDu6rf2C_vgCkk' // Replace with your actual Supabase Anon Key
  }));

  return (
    <SessionContextProvider
      supabaseClient={supabaseClient}
      initialSession={pageProps.initialSession}
    >
      <Component {...pageProps} />
    </SessionContextProvider>
  );
}