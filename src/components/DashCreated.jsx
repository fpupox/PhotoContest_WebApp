import React from 'react';
import { Button } from 'react-bootstrap';

function DashCreated() {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px' }}>
        <div>
          <h3><strong>Miami Beach Tech Week</strong> Photo Contest.</h3>
        </div>
        <div>
          <Button variant="primary" type="submit">Create a New Contest</Button>
        </div>
      </div>

      {/* Hero Section */}
      <div className="hero-container" style={{ display: 'flex', height: '30%', width: '100%', padding: '100px', justifyContent: 'center', backgroundColor: '#d4ffeb' }}>
        <div className="hero-content">
          <h1>Your Contest is in the Air!</h1>
          <p>Let your audience know about it.</p>
          <button className="btn btn-primary" style={{ width: '100%'}}>Share It</button>
        </div>
      </div>


    </div>
  );
}

export default DashCreated;

