import HoverRating from './StarRating';
import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBRipple
} from 'mdb-react-ui-kit';
import StarRating from './StarRating'; // Import the HoverRating component

const cardsData = [
  {
    title: 'USER00001',
    imgUrl: 'https://mdbootstrap.com/img/new/standard/nature/111.webp'
  },
  {
    title: 'USER00002',
    imgUrl: 'https://mdbootstrap.com/img/new/standard/nature/112.webp'
  },
  {
    title: 'USER00003',
    imgUrl: 'https://mdbootstrap.com/img/new/standard/nature/111.webp'
  },
  {
    title: 'USER00004',
    imgUrl: 'https://mdbootstrap.com/img/new/standard/nature/112.webp'
  }
];

export default function VoteDashboard() {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', width: '70%', gap: '20px', padding: '20px', margin: 'auto' }}>
    {cardsData.map((card, index) => (
      <MDBCard key={index} >
        <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
            <MDBCardImage src={card.imgUrl} fluid alt='Card Image' />
            <a>
              <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
            </a>
          </MDBRipple>
          <MDBCardBody>
            <MDBCardTitle>{card.title}</MDBCardTitle>
            <MDBCardText>{card.text}</MDBCardText>
            <HoverRating /> {/* Replace MDBBtn with HoverRating */}
          </MDBCardBody>
        </MDBCard>
      ))}
    </div>
  );
}

