import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; // Import the CSS for styling


function FormEntry() {
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
      </Form.Group>

      <Form.Group controlId="formAgree" className="mb-3">
        <Form.Check
          type="checkbox"
          label="Agree to Terms and Conditions"
          checked={agree}
          onChange={(e) => setAgree(e.target.checked)}
        />
      </Form.Group>

      <h6>Create your Account</h6>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email Address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      

            

      
      <div style={{ display: 'flex', justifyContent: 'right', gap: '10px', paddingTop: '20px' }}>
        <Button variant="primary" type="submit"> Submit </Button>
      </div>



      

    </Form>

    
  );
}

export default FormEntry;
