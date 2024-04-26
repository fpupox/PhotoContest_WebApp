import React from 'react';
import { Button } from 'react-bootstrap';
import { shareOnSocialMedia } from '../utils'; // Add the missing import statement
import Link from 'next/link';

function DashCreated() {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px' }}>
                
        <div>

          <Link href="/createcontestpage">
          <Button variant="primary" type="submit">Create a New Contest</Button>
          </Link>

        </div>
      </div>

      {/* Hero Section */}
      <div className="hero-container" style={{ display: 'flex', height: '30%', width: '100%', padding: '100px', justifyContent: 'center', backgroundColor: '#d4ffeb' }}>
    <div className="hero-content">

          <h1><strong>Miami Beach Fauna Week Contest</strong><br/> is in the Air!</h1>
          <h3>Let your audience know about it.</h3>
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '40px' }}>
            <h6>Judge One</h6><h6>Judge Two</h6><h6>Judge Three</h6>
          </div>
          
          <a href="https://www.facebook.com/sharer/sharer.php?u=https://laughing-fiesta-q67qq4pv5jv356x-3000.app.github.dev/publicpage" className="btn btn-primary" style={{ width: '100%' }} onClick={shareOnSocialMedia} target="_blank" rel="noopener noreferrer">Share It</a>
        
          
          
        
        </div>
      </div>

      <div className="hero-container" style={{ display: 'flex', height: '30%', width: '100%', padding: '20px', justifyContent: 'center', backgroundColor: '#d4ffeb' }}>
            <h6>*** counter</h6>
          </div>
          <div className="hero-container" style={{ display: 'flex', height: '30%', width: '100%', padding: '20px', justifyContent: 'center', backgroundColor: '#d4ffeb' }}>
            <h6>*** dropdown to other contests</h6>
          </div>

      


    </div>




  );
}

export default DashCreated;
