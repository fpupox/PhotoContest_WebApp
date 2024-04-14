import React from 'react';
import Link from 'next/link'; // Import Link from Next.js


import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
} from 'mdb-react-ui-kit';

export default function App() {
  return (
    <>
      <MDBContainer fluid>
        <MDBNavbar expand='lg' light bgColor='light'>
          <MDBContainer fluid>
            <MDBNavbarBrand href='#'><strong>PhotoContest</strong></MDBNavbarBrand>
            <div style={{ display: 'flex', justifyContent: 'right', gap: '10px', paddingTop: '20px', gap: '10px' }}>
            
            <Link href="/components/DashCreated">
              <h6 style={{ cursor: 'pointer' }}>DashCreated</h6>
            </Link>
                
            <Link href="/components/FormCreateContest">
              <h6 style={{ cursor: 'pointer' }}>FormCreateContest</h6>    
            </Link>

            <Link href="/components/Dashboard">
              <h6 style={{ cursor: 'pointer' }}>Dashboard</h6>    
            </Link>

            <Link href="/components/Login">
              <h6 style={{ cursor: 'pointer' }}>Login</h6>    
            </Link>
                          
      </div>

          </MDBContainer>
        </MDBNavbar>
      </MDBContainer>
    </>
  );
}