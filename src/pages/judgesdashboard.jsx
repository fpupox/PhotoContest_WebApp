import React from 'react';
import Navbar from '../components/Navbar';
import JudgesDashboardComp from '../components/JudgesDashboardComp';
import { securePage } from '@/services/securePage';


function judgesdashboard () {
  return (
    <>
      <Navbar />
      <JudgesDashboardComp />
    </>
  );
}

export default securePage(judgesdashboard, "/judgesdashboard");
