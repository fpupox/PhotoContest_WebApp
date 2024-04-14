import React, { useState } from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from 'mdb-react-ui-kit';

function CardWithModal({ title, text, imgUrl }) {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => setModalOpen(!modalOpen);

  return (
    <>
      <MDBCard>
        <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay' onClick={toggleModal}>
          <MDBCardImage src={imgUrl} fluid alt='...' />
          <a>
            <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
          </a>
        </MDBRipple>
        <MDBCardBody>
          <MDBCardTitle>{title}</MDBCardTitle>
          <MDBCardText>{text}</MDBCardText>
          <MDBBtn onClick={toggleModal}>Open Modal</MDBBtn>
        </MDBCardBody>
      </MDBCard>

      <MDBModal open={modalOpen} setOpen={setModalOpen} tabIndex='-1'>
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>{title}</MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={toggleModal}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <MDBCardImage src={imgUrl} fluid alt='...' style={{ maxWidth: '100%', maxHeight: '60vh', objectFit: 'contain' }} />
              <MDBCardText>{text}</MDBCardText>
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color='secondary' onClick={toggleModal}>
                Close
              </MDBBtn>
              <MDBBtn>Save changes</MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}

function VoteDashboard() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', paddingTop: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', padding: '20px' }}>
        <CardWithModal
          title="Card Title 1"
          text="Some quick example text to build on the card title and make up the bulk of the card's content."
          imgUrl="https://mdbootstrap.com/img/new/standard/nature/111.webp"
        />
        {/* Add more CardWithModal components as needed */}
      </div>

      {/* Add more rows of CardWithModal components as needed */}
    </div>
  );
}

export default VoteDashboard;
