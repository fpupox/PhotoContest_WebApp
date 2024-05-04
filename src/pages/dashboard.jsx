import React from 'react';
import { securePage } from "@/services/securePage";
import Navbar from '../components/Navbar';
import FormEntry from '../components/FormEntry.jsx';


// Define Dashboard component
const Dashboard = () => {

  return (
    <div>
      <Navbar />

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px', gap: '10px' }}>
        <FormEntry />
      </div>
    </div>

  );
};

// Export securePage HOC with Dashboard component
export default securePage(Dashboard);
