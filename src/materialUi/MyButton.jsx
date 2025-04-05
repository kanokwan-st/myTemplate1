import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function MyButton() {
  return (
    <Stack direction="row" spacing={2} p={4}>
      <Button variant="contained">normal</Button>
      <Button variant="contained" color='success'>success</Button>
      <Button variant="contained" color='primary'>theme</Button>
      <Button variant="contained" color='orange'>theme</Button>
    </Stack>
  );
}