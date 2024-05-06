import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { shareOnSocialMedia } from '../utils';
import Link from 'next/link';
import { useSupabaseClient } from "@supabase/auth-helpers-react";

function JudgesDashboardComp() {
  const [contestName, setContestName] = useState('');
  const [bannerPath, setBannerPath] = useState('');
  const supabase = useSupabaseClient();

  useEffect(() => {
    const fetchContestData = async () => {
      try {
        const { data: contestData, error: contestError } = await supabase
          .from('Contests')
          .select('name, banner_path')
          .order('created_at', { ascending: false })
          .limit(1);

        if (contestError) {
          throw contestError;
        }

        if (contestData && contestData.length > 0) {
          setContestName(contestData[0].name);
          setBannerPath(contestData[0].banner_path);
        }
      } catch (error) {
        console.error('Error fetching contest data:', error.message);
      }
    };

    fetchContestData();
  }, []);


  return (
    <React.Fragment>

        <div className="hero-container" style={{ display: 'flex', height: 'auto', width: '100%', paddingTop: '30vh', paddingBottom: '30vh',justifyContent: 'center', backgroundColor: '#d4ffeb' }}>
          <div className="hero-content">
          
        


          <h1><strong>Welcome Judge to <br/> {contestName} Contest!</strong></h1>
          <h3>Begin your journey!</h3>
          
          
          <Link href="/votedashboardpage">
          
          <div style={{ width: 'auto', paddingTop: '20px' }}></div>
          <Button variant="primary" type="submit" className="w-100" style={{ width: '60vh' }}> Let's Get Started! </Button>
          <div/>  
          </Link>

        </div>
      </div>
    </React.Fragment>
  );
}

export default JudgesDashboardComp;
