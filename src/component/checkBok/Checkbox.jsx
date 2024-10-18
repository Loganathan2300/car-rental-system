import React from 'react';
import { Checkbox as MuiCheckbox, FormControlLabel } from '@mui/material';

const Checkbox = ({ className, label, labelClassName, checked, onChange, color }) => {
  return (
    <div className={className}>
      <FormControlLabel
        control={
          <MuiCheckbox
            checked={checked}
            onChange={onChange}
            color={color} 
          />
        }
        label={label}
        classes={{ label: labelClassName }} 
      />
    </div>
  );
};

export default Checkbox;
