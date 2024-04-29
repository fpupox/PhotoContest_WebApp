import React from 'react';
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { Form, Button } from 'react-bootstrap';
export function Login() {
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const supabase = useSupabaseClient();
  const router = useRouter();
  const returnTo = router.query.returnTo || "/";
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
      router.replace(returnTo);
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
      router.replace("/dashboard");
    }
  };
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 'auto', paddingTop: '10%' }}>
      <div style={{ width: '500px' }}>
        <h3>Login/Register</h3>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" {...form.register("email")} />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" {...form.register("password")} />
          </Form.Group>
          <div style={{ display: 'flex', justifyContent: 'right', gap: '10px', paddingTop: '20px' }}>
            <Button variant="secondary" type="button" onClick={handleSignup}>
              Sign up
            </Button>
            <Button variant="primary" type="button" onClick={handleLogin}>
              Login
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}