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
        <MDBNavbar expand='lg' light bgColor='light'>
          <MDBContainer fluid>
            <MDBNavbarBrand href='#'><strong>PhotoContest</strong></MDBNavbarBrand>
            <div style={{ display: 'flex', justifyContent: 'right', gap: '10px', paddingTop: '20px', gap: '10px' }}>
              <h6>FormEntry</h6>
              <h6>FormCreateContest</h6>
              <h6>Dashboard</h6>
              <h6>Login</h6>
              <h6>EnterPost</h6>
              
      </div>

          </MDBContainer>
        </MDBNavbar>
      </MDBContainer>
    </>
  );
}