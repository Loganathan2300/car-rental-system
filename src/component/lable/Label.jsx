import React from 'react';
import { FormLabel } from '@mui/material';

const Label = ({ htmlFor, children, className, ...props }) => {
  return (
    <FormLabel htmlFor={htmlFor} className={className} {...props}>
      {children}
    </FormLabel>
  );
};

export default Label;
