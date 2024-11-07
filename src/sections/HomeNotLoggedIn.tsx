// src/sections/HomeNotLoggedIn.tsx

'use client';

import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { signIn } from 'next-auth/react';

export default function HomeNotLoggedIn() {
  return (
    <>
      <Typography>pisomka1</Typography>
      <Typography>prihláste sa.</Typography>
      <Button variant="contained" color="primary" onClick={() => signIn()}>
        login
      </Button>
    </>
  );
}
