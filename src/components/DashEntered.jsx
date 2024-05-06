import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { shareOnSocialMedia } from '../utils';
import Link from 'next/link';
import { useSupabaseClient } from "@supabase/auth-helpers-react";


function DashEntered() {

  const [contestName, setContestName] = useState('');
  const [bannerPath, setBannerPath] = useState('');
  const [judges, setJudges] = useState([]);
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
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px' }}>
        <div>
          <h3>This is <strong>{contestName}</strong> Contest Dashboard</h3>
        </div>
        <div>

          

        </div>
      </div>

      {/* Hero Section */}
      <div className="hero-container" style={{ display: 'flex', height: '30%', width: '100%', padding: '30vh', justifyContent: 'center', backgroundColor: '#d4ffeb' }}>
        <div className="hero-content">
          <h1>Your are now competing in <br/><strong> {contestName}</strong> Contest</h1>
          
          
          <div className="hero-container" style={{ display: 'flex', width: '100%', paddingTop: '3vh', paddingBottom: '3vh', justifyContent: 'left', backgroundColor: '#d4ffeb' }}>
          <h5>Let your friends know about it.</h5>
          </div>
          
          
          <a href="https://www.facebook.com/sharer/sharer.php?u=https://laughing-fiesta-q67qq4pv5jv356x-3000.app.github.dev/judgesdashboard" className="btn btn-primary" style={{ width: '60vh' }} onClick={shareOnSocialMedia} target="_blank" rel="noopener noreferrer">Share It</a>
        
        
        </div>
      </div>

      


    </div>




  );
}

export default DashEntered;