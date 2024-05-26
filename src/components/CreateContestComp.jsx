import React from 'react';
import Link from 'next/link';
import { Button } from 'react-bootstrap';
import Image from './Image';

function CreateContestComp() {
  return (
    <div>
      <div className="hero-container" style={{ display: 'flex', height: 'auto', width: '100%', paddingTop: '15vh', paddingBottom: '20vh', justifyContent: 'center', backgroundColor: '#d4ffeb' }}>
        <div className="hero-content">
          <Image src="https://kcrvlybhthtqimkfvcyb.supabase.co/storage/v1/object/public/pictures/pexels-cottonbro-6805158.jpg?t=2024-05-06T06%3A28%3A37.272Z" alt="Contest Banner" style={{ width: '60vh', height: 'auto', borderRadius: '10px', margingBottom: '5vh'}} />
          <div style={{paddingTop: '5vh'}}>
            <h1><strong>Ready to Create a Contest?</strong></h1>
            <h3>Let&apos;s get started!</h3>
          </div>
          <Link href="/createcontestpage">
            <div style={{ width: 'auto', paddingTop: '20px' }}>
              <Button className="btn btn-primary">Create Contest</Button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CreateContestComp;
