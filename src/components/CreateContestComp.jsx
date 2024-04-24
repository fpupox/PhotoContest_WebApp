import React from 'react';
import Link from 'next/link';
import { Form, Button } from 'react-bootstrap';



function CreateContestComp() {
  return (
    <div>
      

      
      <div className="hero-container" style={{ display: 'flex', height: 'auto', width: '100%', paddingTop: '45vh', paddingBottom: '30vh',justifyContent: 'center', backgroundColor: '#d4ffeb' }}>
        <div className="hero-content">
          <h1>Create your Contest Now!</h1>
          <p>Let your audience know about it.</p>
          <button className="btn btn-primary" style={{ width: '100%'}}>Create Contest</button>
        </div>
      </div>


    </div>
  );
}

export default CreateContestComp;