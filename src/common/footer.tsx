import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function Footer() {
  return (
    <Box>
      <Toolbar>
        <Typography variant="caption" component="div" sx={{
          flexGrow: 1,
        }}>
            Copyrights © 2022 | Ahmad Dekmak
        </Typography>
      </Toolbar>
    </Box>
  );
}
