import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { shareOnSocialMedia } from '../utils';
import Link from 'next/link';
import { useSupabaseClient } from "@supabase/auth-helpers-react";

function DashCreated() {
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

    const fetchJudges = async () => {
      try {
        const { data: judgesData, error: judgesError } = await supabase
          .from('Judges')
          .select('user_email')
          .order('created_at', { ascending: false })
          .limit(3);

        if (judgesError) {
          throw judgesError;
        }

        if (judgesData && judgesData.length > 0) {
          setJudges(judgesData.map(judge => judge.user_email));
        }
      } catch (error) {
        console.error('Error fetching judges data:', error.message);
      }
    };

    fetchContestData();
    fetchJudges();
  }, []);

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px' }}>
        <div>
          <Link href="/createcontestpage">
            <Button variant="primary" type="submit">Create a New Contest</Button>
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <div className="hero-container" style={{ display: 'flex', height: '30%', width: '100%', padding: '20px', justifyContent: 'center', backgroundColor: '#d4ffeb' }}>
        <div className="hero-content">
          {bannerPath && (
            <img src={bannerPath} alt="Contest Banner" style={{ width: '60vh', height: 'auto' }} />
          )}

          <h1>Your Contest<br/><strong>{contestName}</strong><br/> is in the Air!</h1>
          <h3>Let your audience know about it.</h3>

          <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '20px'}}>

          <a href="https://www.facebook.com/sharer/sharer.php?u=https://laughing-fiesta-q67qq4pv5jv356x-3000.app.github.dev/publicpage" className="btn btn-primary" style={{ width: '100%' }} onClick={shareOnSocialMedia} target="_blank" rel="noopener noreferrer">Share It</a>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '40px' }}>
            
            <div>
              <h6>Judge 1</h6>
              <p>{judges.length > 0 && judges[0]}</p>
            </div>
            <div>
              <h6>Judge 2</h6>
              <p>{judges.length > 1 && judges[1]}</p>
            </div>
            <div>
              <h6>Judge 3</h6>
              <p>{judges.length > 2 && judges[2]}</p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default DashCreated;
