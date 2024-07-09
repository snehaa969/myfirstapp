import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { TextField, Button } from '@mui/material';
import { saveUserInfo } from '../utils/storage';

const FirstPage: React.FC = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const history = useHistory();

  const handleSubmit = () => {
    saveUserInfo({ name, phoneNumber, email });
    history.push('/second-page');
  };

  return (
    <div>
      <TextField label="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <TextField label="Phone Number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
      <TextField label="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <Button variant="contained" onClick={handleSubmit}>Submit</Button>
    </div>
  );
};

export default FirstPage;