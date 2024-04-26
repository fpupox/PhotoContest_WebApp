import React from 'react';
import { Button } from 'react-bootstrap';
import Link from 'next/link';

function JudgesDashboardComp() {
  return (
    <React.Fragment>
      <div className="hero-container" style={{ display: 'flex', height: 'auto', width: '100%', paddingTop: '45vh', paddingBottom: '30vh',justifyContent: 'center', backgroundColor: '#d4ffeb' }}>
        <div className="hero-content">
          <h1><strong>Welcome Judge!</strong></h1>
          <h3>Begin your journey as Judge of the <br></br> Miami Wildlife Week Photo Contest</h3>
          
          
          <Link href="/votedashboardpage">
            <Button variant="primary" type="submit" className="w-100" style={{ width: '100%' }}> Let's Get Started! </Button>
            
          </Link>

        </div>
      </div>
    </React.Fragment>
  );
}

export default JudgesDashboardComp;