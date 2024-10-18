import React from 'react';
import { Select as MuiSelect, MenuItem, FormControl, InputLabel } from '@mui/material';

const Select = ({
  options,
  value,
  onChange,
  name,
  placeholder,
  disabled,
  className,
}) => {
  return (
    <FormControl className={className} disabled={disabled}>
      {placeholder && (
        <InputLabel id={`${name}-label`}>{placeholder}</InputLabel>
      )}
      <MuiSelect
        labelId={`${name}-label`}
        value={value}
        onChange={onChange}
        name={name}
        displayEmpty
        renderValue={(selected) => {
          if (!selected) {
            return placeholder;
          }
          return selected;
        }}
      >
        {placeholder && (
          <MenuItem value="" disabled>
            {placeholder}
          </MenuItem>
        )}
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </MuiSelect>
    </FormControl>
  );
};

export default Select;
