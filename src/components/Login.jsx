import React from 'react';
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { Form, Button } from 'react-bootstrap';
import TextControlsExample from './TextControlsExample'; 
import FormEntry from './FormEntry'; 


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
      router.replace("/dashboard");
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ width: '500px' }}>
        <h2>Login/Register</h2>
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
            <Button variant="primary" type="button" onClick={handleLogin}>
              Login
            </Button>
            
            <Button variant="secondary" type="button" onClick={handleSignup}>
              Sign up
            </Button>
          </div>
        </Form>
        <TextControlsExample /> {/* Rendering TextControlsExample component */}
        <FormEntry/>
      </div>
    </div>
  );
}

