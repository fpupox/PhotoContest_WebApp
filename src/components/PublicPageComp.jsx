import { Button } from 'react-bootstrap';
import Link from 'next/link';
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import React, { useState, useEffect } from 'react';
import Imaging from 'next/image';

function PublicPageComp() {
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
  }, [supabase]);

  return (
    <React.Fragment>
      <div className="hero-container" style={{ display: 'flex', height: 'auto', width: '100%', paddingTop: '10vh', paddingBottom: '30vh', justifyContent: 'center', backgroundColor: '#d4ffeb' }}>
        <div className="hero-content">
          {bannerPath && (
            <Imaging src={bannerPath} alt="Contest Banner" width={960} height={540} style={{ width: '60vh', height: 'auto' }} />
          )}
          <h1>Welcome to <br/><strong>{contestName}<br/></strong> Photo Contest!</h1>
          <h3>Showcase your talent to a global audience<br/> and gain recognition for your work.</h3>
          <Link href="/contestentry">
            <Button variant="primary" type="submit" className="w-100" style={{ width: '60vh' }}>Let&apos;s Get Started!</Button>
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
}

export default PublicPageComp;
