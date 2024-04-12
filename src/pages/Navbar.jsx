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
            <MDBNavbarBrand href='#'>Navbar</MDBNavbarBrand>
          </MDBContainer>
        </MDBNavbar>
      </MDBContainer>
    </>
  );
}