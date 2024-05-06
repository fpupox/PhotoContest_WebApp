import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useRouter } from "next/router";
import { useSupabaseClient } from "@supabase/auth-helpers-react";

function FormEntry() {
  const [contestName, setContestName] = useState('');
  const [agree, setAgree] = useState(false);
  const [bannerPath, setBannerPath] = useState(null);
  const { register, handleSubmit } = useForm();
  const router = useRouter();
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
  }, []);

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    console.log('File uploaded:', file);
  
    const randomName = Math.random().toString(36).substring(7);
    const { data, error } = await supabase.storage.from('pictures').upload(randomName, file, {
      cacheControl: '3600',
      upsert: false
    });
    
    if (error) {
      console.error('Error uploading file:', error.message);
    } else {
      console.log('File uploaded successfully');
      console.log({ data });

      setBannerPath(data.fullPath);
    }
  };

  const onSubmit = async (formData) => {
    const { firstName, lastName, title } = formData;
    
    // Get the contest ID from somewhere (e.g., user input, application state)
    const contestId = '288c149c-18d0-42ac-804b-1409ccee827b';
  
    const { error: contestError } = await supabase.from('Posts').insert([  
      {
        first_name: firstName,
        last_name: lastName,
        title: title, // Check if title is present in formData
        banner_path: bannerPath,
        contest_id: contestId, // Include the contest ID
      },
    ]).select();
  
    if (contestError) {
      console.error('Error inserting data: ', contestError);
      return;
    }
  
    router.replace("/contestentered");
};
  
   

  return (

    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      paddingTop: '20px', 
      width: '60vh', 
      flexDirection: 'column',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)'
    }}>

      <div>
      <h1> Welcome to <br/><strong>{contestName}</strong> Contest </h1>
      <br/>
      <h5> Enter the Contest by filling out the form below </h5>
      </div>

      
      <div>

      
      

      <Form onSubmit={handleSubmit(onSubmit)}>
        

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
          <Form.Label>First Name</Form.Label>
          <Form.Control {...register('firstName')} type="text" placeholder="First Name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
          <Form.Label>Last Name</Form.Label>
          <Form.Control {...register('lastName')} type="text" placeholder="Last Name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
          <Form.Label>Title</Form.Label>
          <Form.Control {...register('title')} type="text" placeholder="Image Title" />
        </Form.Group>

        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Upload Image</Form.Label>
          <Form.Control type="file" onChange={handleFileUpload} />
        </Form.Group>

        <Form.Group controlId="formAgree" className="mb-3">
          <Form.Check
            type="checkbox"
            label={
              <span style={{ textDecoration: 'underline' }}>
                <a href="https://www.samsung.com/us/sustainability/environment/policies-and-guidelines/" target="_blank">I agree with all the rules</a>
              </span>
            }
            checked={agree}
            onChange={(e) => setAgree(e.target.checked)}
          />
        </Form.Group>

        <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '20px' }}>
          <Button variant="primary" type="submit" className="w-100" style={{ width: '100%' }}> Post my Entry </Button>
        </div>
      </Form>
    </div>
    </div>
  );
}

export default FormEntry;
