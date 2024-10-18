import React from 'react';
import {
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
} from '@mui/material';

const DataTable = ({
  headers,
  data,
  className,
  striped,
  bordered,
  hover,
}) => {
  return (
    <TableContainer component={Paper} className={className}>
      <Table 
        sx={{
          '&.MuiTable-root': {
            border: bordered ? '1px solid' : 'none',
            '& tbody tr:hover': hover ? { backgroundColor: 'rgba(0, 0, 0, 0.04)' } : {},
          },
          ...(striped && {
            '& tbody tr:nth-of-type(odd)': {
              backgroundColor: 'rgba(0, 0, 0, 0.03)',
            },
          }),
        }}
      >
        <TableHead>
          <TableRow>
            {headers.map((header, index) => (
              <TableCell key={index}>
                {header.charAt(0).toUpperCase() + header.slice(1)}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={index}>
              {headers.map((header) => (
                <TableCell key={header}>{row[header]}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DataTable;
