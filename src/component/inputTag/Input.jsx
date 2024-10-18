import React from 'react';
import { TextField } from '@mui/material';

const Input = ({
  type,
  value,
  onChange,
  placeholder,
  name,
  disabled,
  className,
  maxLength,
  minLength,
  pattern,
  required,
  autoFocus,
  autoComplete,
  variant,
  sx,
  id,
  label,
}) => {
  return (
    <TextField
      type={type}
      id={id}
      label={label}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      name={name}
      disabled={disabled}
      className={className}
      variant={variant} 
      sx={sx}
      fullWidth
      inputProps={{
        maxLength,
        minLength,
        pattern,
        required,
        autoFocus,
        autoComplete,
      }}
    />
    // <TextField id="outlined-basic" label="Outlined" variant="outlined" />
  );
};

export default Input;
