import React from 'react';
import { TextField } from '@mui/material';

const TextArea = ({ value, onChange, placeholder, name, variant }) => {
  return (
    <TextField
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      name={name}
      multiline
      rows={4} 
      variant={variant} 
      fullWidth 
    />
  );
};

export default TextArea;
