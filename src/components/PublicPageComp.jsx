import React from 'react';
import { Button } from 'react-bootstrap';
import Link from 'next/link';
import { useSupabaseClient } from "@supabase/auth-helpers-react";


function PublicPageComp() {
  return (
    <React.Fragment>
      <div className="hero-container" style={{ display: 'flex', height: 'auto', width: '100%', paddingTop: '30vh', paddingBottom: '30vh',justifyContent: 'center', backgroundColor: '#d4ffeb' }}>
        <div className="hero-content">
          <h1>Welcome to <br></br><strong>Miami Beach Fauna Week<br></br></strong> Photo Contest!</h1>
          <h3>Showcase your talent to a global audience<br></br> and gain recognition for your work.</h3>
          
          
          <Link href="/contestentry">
            <Button variant="primary" type="submit" className="w-100" style={{ width: '60vh' }}> Let's Get Started! </Button>

            
            
          </Link>

        </div>
      </div>
    </React.Fragment>
  );
}

export default PublicPageComp;