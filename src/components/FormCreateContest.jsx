import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; // Import the CSS for styling


function FormCreateContest() {
  const [selectedDate, setSelectedDate] = useState(null); 
  const [endDate, setEndDate] = useState(null);
  const [agree, setAgree] = useState(false); // State for agreement

  // Function to handle file upload
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    // Add your file upload logic here
    console.log('File uploaded:', file);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted');
  };

  return (
    <Form>

      <div style={{ display: 'flex', justifyContent: 'right', gap: '10px', paddingTop: '20px' }}>
        <Button variant="primary" type="submit"> Submit </Button>
      </div>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Contest Name" />
      </Form.Group>
      
      

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Initial Date</Form.Label>
        <br />
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          dateFormat="dd/MM/yyyy" // Date format
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
        <Form.Label>End Date</Form.Label>
        <br />
        <DatePicker
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          dateFormat="dd/MM/yyyy" // Date format
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Rules</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>

      <Form.Group controlId="formAgree" className="mb-3">
        <Form.Check
          type="checkbox"
          label="Agree to Terms and Conditions"
          checked={agree}
          onChange={(e) => setAgree(e.target.checked)}
        />
      </Form.Group>



      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Judge #1 Email Address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Judge #2 Email Address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Judge #3 Email Address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>

      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Upload Banner 800px by 400px</Form.Label>
        <Form.Control type="file" onChange={handleFileUpload} />
      </Form.Group>

      <div style={{ display: 'flex', justifyContent: 'right', gap: '10px', paddingTop: '20px' }}>
        <Button variant="primary" type="submit"> Submit </Button>
      </div>



      

    </Form>

    
  );
}

export default FormCreateContest;
