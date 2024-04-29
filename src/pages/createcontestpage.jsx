import React from 'react';
import Navbar from '../components/Navbar'; // Correct relative path for Navbar component
import FormCreateContest from '../components/FormCreateContest'; // Correct relative path for DashCreated component
import { securePage } from '@/services/securePage';

function Createcontestpage () {
  return (
    <>
      <Navbar />
      <FormCreateContest />
    </>
  );
};

export default securePage(Createcontestpage, "/createcontestpage");
