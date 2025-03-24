import { styled } from '@mui/material';
import Box from '@mui/material/Box';
import React, { ReactNode } from 'react';

const BoxWrapper = styled('div')({
    width: '100%',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#5865F2',
});

interface AuthBoxProps {
  children: ReactNode;
}

const AuthBox: React.FC<AuthBoxProps> = ({ children }) => {
  return (
    <BoxWrapper>
      <Box 
        sx={{
          width: 700,
          height: 420,
          bgcolor: '#36393f',
          borderRadius: '5px',
          display: 'flex',
          flexDirection: 'column',
          padding: '25px',
        }}
      > 
        {children}
      </Box>
    </BoxWrapper>
  );
};

export default AuthBox;