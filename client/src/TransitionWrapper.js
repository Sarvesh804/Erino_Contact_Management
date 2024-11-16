import React from 'react';
import { Grow } from '@mui/material';

const TransitionWrapper = ({ children }) => {
  return (
    <Grow in timeout={500}>
      <div>{children}</div>
    </Grow>
  );
};

export default TransitionWrapper;
