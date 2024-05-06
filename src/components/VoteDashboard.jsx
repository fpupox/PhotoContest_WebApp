import React, { useState, useEffect } from 'react';
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import StarRating from './StarRating';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBRipple
} from 'mdb-react-ui-kit';

function VoteDashboard({ contestName }) { // Include contestName as a prop
  const [contestEntries, setContestEntries] = useState([]);
  const supabase = useSupabaseClient();

  useEffect(() => {
    const fetchContestEntries = async () => {
      try {
        const { data: contestEntriesData, error: contestEntriesError } = await supabase
          .from('Posts')
          .select('title, banner_path')
          .order('created_at', { ascending: false });

        if (contestEntriesError) {
          throw contestEntriesError;
        }

        if (contestEntriesData && contestEntriesData.length > 0) {
          setContestEntries(contestEntriesData);
          console.log('Contest Entries Data:', contestEntriesData);
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
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap: '20px', padding: '20px', margin: 'auto', flexWrap: 'wrap' }}>
  {contestEntries.map((contestEntry) => (
    <MDBCard key={contestEntry.id} style={{ width: '30%', marginBottom: '20px' }}>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src={contestEntry.banner_path} fluid alt='Contest Entry Image' />
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle>{contestEntry.title}</MDBCardTitle>
        <StarRating />
      </MDBCardBody>
    </MDBCard>
  ))}
</div>

    </div>
  );
}

export default VoteDashboard;
