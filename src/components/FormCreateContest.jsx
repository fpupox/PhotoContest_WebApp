import React, { useState } from 'react';
import { Form, Button, InputGroup } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; // Import the CSS for styling
import { useForm } from 'react-hook-form';
import { FaCalendarAlt } from 'react-icons/fa';
// import * as Yup from 'yup'; // Import Yup
import { useRouter } from "next/router";
import { useSupabaseClient } from "@supabase/auth-helpers-react";

// Define the contact schema using Yup
// const ContactSchema = Yup.object().shape({
//   name: Yup.string().max(140, "Too long!").required("Required."),
//   email: Yup.string().email("Invalid email.").max(140, "Too long!").required("Required."),
//   rules: Yup.string().max(280, "Too long!").required("Required."),
// });

const FormCreateContest = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [uploadedFile, setUploadedFile] = useState(null); // State for uploaded file
  const [bannerPath, setBannerPath] = useState(null);
  const { register, handleSubmit } = useForm();
  const router = useRouter();
  const supabase = useSupabaseClient();

  // Function to handle file upload
  // TODO: Implement file upload
  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    console.log('File uploaded:', file);

    // Upload file to Supabase Storage
    // generate random name
    const randomName = Math.random().toString(36).substring(7);
    const { data, error } = await supabase.storage.from('pictures').upload(randomName, file, {
      cacheControl: '3600', // Cache control header
      upsert: false // Whether to overwrite the file if it already exists
    });

    if (error) {
      console.error('Error uploading file:', error.message);
    } else {
      console.log('File uploaded successfully');
      console.log({ data });
      // Update the state or perform other actions as needed
      setBannerPath(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/${data.fullPath}`); // Assuming you want to store the file path in state

      // https://kcrvlybhthtqimkfvcyb.supabase.co/storage/v1/object/public/pictures/3olxyr
    }
  };

  const onSubmit = async (data) => {
    const { error: contestError, data: contestData } = await supabase.from('Contests').insert([
      {
        name: data.name,
        rules: data.rules,
        start_date: startDate,
        end_date: endDate,
        // results_date should be endDate plus one day  
        results_date: new Date(endDate.setDate(endDate.getDate() + 1)), // TODO: fix this
        banner_path: bannerPath, // TODO: upload file and set banner_path
      },
    ]).select();

    if (contestError) {
      // TODO: show feedback to user, maybe use a toast, snackbar or alert
      console.error('Error inserting data: ', contestError);
      return;
    }

    const contest = contestData[0];
    const judgeEmails = [data.judge1Email, data.judge2Email, data.judge3Email].filter(email => email);
    if (!judgeEmails.length) {
      console.log('No judges to insert');
      return;
    }
    const { error: judgesError } = await supabase.from('Judges').insert(
      judgeEmails.map(email => ({ contest_id: contest.id, user_email: email }))
    );

    if (judgesError) {
      console.error('Error inserting data: ', judgesError);
    }

    router.replace("/contestcreatedpage");
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '40px' }}>

      <Form onSubmit={handleSubmit(onSubmit)}>
        
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Name</Form.Label>
          <Form.Control {...register('name')} type="text" placeholder="Contest Name" />
        </Form.Group>

        <div style={{ display: 'flex', height: 'auto', justifyContent: 'space-between', width: '500px', gap: '10px' }}>
          <div>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Start Date</Form.Label>
              <br />
              <div style={{ display: 'flex', paddingTop: '10px' }}>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  dateFormat="dd/MM/yyyy" // Date format
                />
                <InputGroup.Text><FaCalendarAlt /></InputGroup.Text>
              </div>
            </Form.Group>
          </div>

          <div>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label>End Date</Form.Label>
              <br />
              <div style={{ display: 'flex', paddingTop: '10px' }}>
                <DatePicker
                  selected={endDate}
                  onChange={(date) => setEndDate(date)}
                  dateFormat="dd/MM/yyyy" // Date format
                />
                <InputGroup.Text><FaCalendarAlt /></InputGroup.Text>
              </div>
            </Form.Group>
          </div>
        </div>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Rules</Form.Label>
          <Form.Control {...register('rules')} as="textarea" rows={3} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Judge #1 Email Address</Form.Label>
          <Form.Control {...register('judge1Email')} type="email" placeholder="name@example.com" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
          <Form.Label>Judge #2 Email Address</Form.Label>
          <Form.Control {...register('judge2Email')} type="email" placeholder="name@example.com" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
          <Form.Label>Judge #3 Email Address</Form.Label>
          <Form.Control {...register('judge3Email')} type="email" placeholder="name@example.com" />
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


        <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', width: '400px' }}>
          <Button variant="primary" type="submit">Submit</Button>
        </div>
      </Form>
    </div>
  );
};

export default FormCreateContest;
