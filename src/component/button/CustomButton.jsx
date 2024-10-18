import React from 'react';
import Button from '@mui/material/Button';


const CustomButton = ({ children, onClick, className,variant,sx }) => {
  return (
    <Button onClick={onClick} variant={variant} sx={sx} className={className} fullWidth>
      {children}
    </Button>
  );
};


export default CustomButton;