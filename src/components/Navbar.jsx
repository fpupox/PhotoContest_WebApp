import React from 'react';
import { MDBNavbarBrand, MDBContainer } from 'mdb-react-ui-kit';
import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";
import { Button } from 'react-bootstrap';
import Link from 'next/link';


// Define Logout component
export function UserInfo() {
  const supabase = useSupabaseClient();
  const router = useRouter();
  const user = useUser();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.replace("/loginpage");
  };

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '16px', paddingTop: '20px' }}>
        <strong>{user?.email}</strong>
        <Button variant="secondary" type="button" onClick={handleLogout}>
          Logout
        </Button>
      </div>
    </>
  );
}

// Define Login component
export function Login() {
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '16px', paddingTop: '20px' }}>
        <Link href="/loginpage">
          <Button variant="secondary" type="button">
            Sign up
          </Button>
        </Link>
        <Link href="/loginpage">
          <Button variant="primary" type="button">
            Login
          </Button>
        </Link>
      </div>
    </>
  );
}



// Define App component
export default function App() {
  const user = useUser();

  return (
    <>
      <MDBContainer fluid>
        <div style={{ display: 'flex', borderBottom: '1px solid lightgray', justifyContent: 'space-between', alignItems: 'center', padding: '10px' }}>
          <MDBNavbarBrand href='https://laughing-fiesta-q67qq4pv5jv356x-3000.app.github.dev/' style={{ fontSize: '28px' }}>
            <strong style={{ marginRight: 'auto' }}>KontestZone</strong>
          </MDBNavbarBrand>
          {user ? <UserInfo /> : <Login />}
        </div>
      </MDBContainer>
    </>
  );
}