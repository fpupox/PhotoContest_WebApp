
import React from 'react';
import { MDBBtn } from 'mdb-react-ui-kit';
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
} from 'mdb-react-ui-kit';


export default function App() {
  return (
    <>
  <MDBContainer fluid>
  <div style={{ display: 'flex', borderBottom: '1px solid lightgray', justifyContent: 'space-between', padding: '20px' }}>
    <div>
    <MDBNavbarBrand href='/index.jsx' style={{ fontSize: 'big' }}><strong>Contester</strong></MDBNavbarBrand>
    </div>
    <div>
      <MDBBtn>Sign In</MDBBtn> 
    </div>
  </div>
  </MDBContainer>
    </>
  );
}
