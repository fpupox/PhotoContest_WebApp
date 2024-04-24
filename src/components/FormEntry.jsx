import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import 'react-datepicker/dist/react-datepicker.css'; // Import the CSS for styling
import Link from 'next/link';

function FormEntry() {
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

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted');
  };

  return (
    <div style={{ width: '500px' }}>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" placeholder="First Name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" placeholder="Last Name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" placeholder="Image Title" />
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

        <Form.Group controlId="formAgree" className="mb-3">
          <Form.Check
            type="checkbox"
            label="Agree to Terms and Conditions"
            checked={agree}
            onChange={(e) => setAgree(e.target.checked)}
          />
        </Form.Group>

        <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '20px' }}>
          <Link href="/dashcreatedpg.jsx">
            <Button variant="primary" type="submit" className="w-100" style={{ width: '100%' }}> Post my Entry </Button>
          </Link>  
        </div>
      </Form>
    </div>
  );
}

export default FormEntry;

