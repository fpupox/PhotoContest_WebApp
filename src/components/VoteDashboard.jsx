import React, { useState, useEffect } from 'react';
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import StarRating from './StarRating'; // Import the HoverRating component
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBRipple
} from 'mdb-react-ui-kit';

function VoteDashboard({ contestName }) { // Accept contestName as a prop
  const [contestEntries, setContestEntries] = useState([]);
  const supabase = useSupabaseClient();

  useEffect(() => {
    const fetchContestEntries = async () => {
      try {
        const { data: contestEntryData, error: contestEntryError } = await supabase
          .from('Posts')
          .select('id, title, banner_path')
          .order('created_at', { ascending: false });

        if (contestEntryError) {
          throw contestEntryError;
        }

        if (contestEntryData && contestEntryData.length > 0) {
          setContestEntries(contestEntryData);
        }
      } catch (error) {
        console.error('Error fetching contest entries:', error.message);
      }
    };

    fetchContestEntries();
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', padding: '20px', margin: 'auto' }}>
      <div>
        <h1>Vote in {contestName}</h1>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
        {contestEntries.map(entry => (
          <div key={entry.id} style={{ width: '30%', marginBottom: '20px' }}>
            <MDBCard>
              <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                <MDBCardImage src={entry.banner_path} fluid alt='Contest Entry Image' />
                <a>
                  <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                </a>
              </MDBRipple>
              <MDBCardBody>
                <MDBCardTitle>{entry.title}</MDBCardTitle>
                <StarRating />
              </MDBCardBody>
            </MDBCard>
          </div>
        ))}
      </div>
    </div>
  );
}

export default VoteDashboard;
