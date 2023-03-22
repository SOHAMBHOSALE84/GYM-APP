import React, { useState } from 'react';
import styled from 'styled-components';
import video from '../assets/beast-mode-goku-4k-live-wallpaper.mp4'

const FormPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
    // do something with the form data, e.g. send it to a server or show a confirmation message
  };

  return (
    <Container id='regForm'>
      <Video autoPlay loop muted>
        <source src={video} type="video/mp4" />
      </Video>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="name">Name:</Label>
          <Input type="text" id="name" name="name" value={name} onChange={handleNameChange} />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">Email:</Label>
          <Input type="email" id="email" name="email" value={email} onChange={handleEmailChange} />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="message">Message:</Label>
          <Textarea id="message" name="message" value={message} onChange={handleMessageChange} />
        </FormGroup>
        <Button type="submit">Submit</Button>
      </Form>
    </Container>
  );
};

const Video = styled.video`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
`;

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  padding: 20px;
  border: 1px solid white;
  background-color: rgba(255, 255, 255, 0.8);
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const Label = styled.label`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid black;
  border-radius: 5px;
`;


const Textarea = styled.textarea`
  width: 100%;
  height: 100px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid black;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: red;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export default FormPage;
