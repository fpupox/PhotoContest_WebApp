import React from 'react';
import { Button } from 'react-bootstrap';
import { shareOnSocialMedia } from '../utils'; // Add the missing import statement
{/*  import Link from 'next/link'; */}

function DashEntered() {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px' }}>
        <div>
          <h3><strong>Miami Beach Tech Week</strong> Photo Contest.</h3>
        </div>
        <div>

        {/*  <Link href="/createcontestpage">
          <Button variant="primary" type="submit">Create a New Contest</Button>
          </Link>   */}

        </div>
      </div>

      {/* Hero Section */}
      <div className="hero-container" style={{ display: 'flex', height: '30%', width: '100%', padding: '100px', justifyContent: 'center', backgroundColor: '#d4ffeb' }}>
        <div className="hero-content">
          <h1>Your are now competing in our Contest!</h1>
          <p>Let your friends know about it.</p>
          <a href="https://www.facebook.com/sharer/sharer.php?u=https://laughing-fiesta-q67qq4pv5jv356x-3000.app.github.dev/judgesdashboard" className="btn btn-primary" style={{ width: '100%' }} onClick={shareOnSocialMedia} target="_blank" rel="noopener noreferrer">Share It</a>
        </div>
      </div>

      


    </div>




  );
}

export default DashEntered;