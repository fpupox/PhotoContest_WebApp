import React from 'react';
import { MDBBtn } from 'mdb-react-ui-kit';
import { MDBNavbarBrand, MDBContainer } from 'mdb-react-ui-kit';
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { Button } from 'react-bootstrap';
import Link from 'next/link';

// Define Login component
export function Login() {
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const supabase = useSupabaseClient();
  const router = useRouter();

  const handleLogin = async () => {
    const values = form.getValues();
    const { data, error: signInError } = await supabase.auth.signInWithPassword({
      email: values.email,
      password: values.password,
    });

    if (signInError) {
      return;
    }

    if (!signInError && data && data.session) {
      await supabase.auth.setSession({
        access_token: data.session.access_token,
        refresh_token: data.session.refresh_token,
      });
      router.replace("/dashboard");
    }
  };

  const handleSignup = async () => {
    const values = form.getValues();
    const { data, error: signInError } = await supabase.auth.signUp({
      email: values.email,
      password: values.password,
    });

    if (signInError) {
      return;
    }

    if (!signInError && data && data.session) {
      await supabase.auth.setSession({
        access_token: data.session.access_token,
        refresh_token: data.session.refresh_token,
      });
      router.replace("/loginpage");
    }
  };

  // Render Login component
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '16px', paddingTop: '20px' }}>
      <Link href="/loginpage">
          <Button variant="secondary" type="button" onClick={handleSignup}>
            Sign up
          </Button>
        </Link>
        <Link href="/loginpage">
          <Button variant="primary" type="button" onClick={handleLogin}>
            Login
          </Button>
        </Link>
      </div>
    </>
  );
}

// Define App component
export default function App() {
  return (
    <>
      <MDBContainer fluid>
        <div style={{ display: 'flex', borderBottom: '1px solid lightgray', justifyContent: 'space-between', alignItems: 'center', padding: '10px' }}>
          <MDBNavbarBrand href='https://laughing-fiesta-q67qq4pv5jv356x-3000.app.github.dev/' style={{ fontSize: '28px' }}>
            <strong style={{ marginRight: 'auto' }}>KontestZone</strong>
          </MDBNavbarBrand>
          {/* Include Login component */}
          <Login />
        </div>
      </MDBContainer>
    </>
  );
}
