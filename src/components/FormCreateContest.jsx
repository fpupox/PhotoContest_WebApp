import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; // Import the CSS for styling
import Link from 'next/link';

function FormCreateContest() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [agree, setAgree] = useState(false); // State for agreement
  const [uploadedFile, setUploadedFile] = useState(null); // State for uploaded file

  // Function to handle file upload
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    // Add your file upload logic here
    console.log('File uploaded:', file);
    setUploadedFile(file);
  };

  // Function to clear uploaded file
  const clearFile = () => {
    setUploadedFile(null);
  };

  return (    

    

    <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '40px' }}>

    <Form>

      

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Contest Name" />
      </Form.Group>
      

      <div style={{ display: 'flex', height: 'auto', width: '100%', justifyContent: 'space-between', gap: '10px' }}>
      <div>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Initial Date</Form.Label>
        <br />
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          dateFormat="dd/MM/yyyy" // Date format
        />
      </Form.Group>
      </div>

      <div>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
        <Form.Label>End Date</Form.Label>
        <br />
        <DatePicker
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          dateFormat="dd/MM/yyyy" // Date format
        />
      </Form.Group>
      </div>
      </div>



      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Rules</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>

      



      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Judge #1 Email Address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
        <Form.Label>Judge #2 Email Address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
        <Form.Label>Judge #3 Email Address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>

      <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Upload Image</Form.Label>
          <Form.Control type="file" onChange={handleFileUpload} />
          {uploadedFile && (
            <div style={{ marginTop: '10px' }}>
              <Button variant="secondary" onClick={clearFile}>Clear Image</Button>
            </div>
          )}
        </Form.Group>

        <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '20px', width: '400px' }}>
          <Link href="/contestcreatedpage">
            
          <Button variant="primary" type="submit" >Submit</Button>
          </Link>
        </div>
      </Form>
    </div>
  );
}

export default FormCreateContest;
