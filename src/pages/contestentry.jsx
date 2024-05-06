import React from 'react';
import { Button } from 'react-bootstrap';
import Navbar from '../components/Navbar';
import FormEntry from '../components/FormEntry';
import { securePage } from '@/services/securePage';

function contestentry() {
  return (
    
    <>
    <Navbar />
    <FormEntry />
  </>
);
};

export default securePage (contestentry, "/contestentry");