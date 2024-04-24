import React from 'react';
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
} from 'mdb-react-ui-kit';

export default function App() {
  return (
    <>
      <MDBContainer fluid>
      <div style={{ display: 'flex', borderBottom: '1px solid lightgray'}}>
        <MDBNavbar expand='lg' light bgColor='white'>
          <MDBContainer fluid>
            <MDBNavbarBrand href='#'><strong>Contester</strong></MDBNavbarBrand>
            <div style={{ display: 'flex', justifyContent: 'right', paddingTop: '20px', gap: '10px' }}>
              {/* Correct the href to the route path associated with DashCreated */}
              
            </div>
          </MDBContainer>
        </MDBNavbar>
        </div>
      </MDBContainer>
    </>
  );
}
