import { Button } from '@mui/material';
import React from 'react';

interface CustomPrimaryButtonProps {
  label: string;
  additionalStyles?: React.CSSProperties;
  disabled?: boolean;
  onClick?: () => void;
}

const CustomPrimaryButton: React.FC<CustomPrimaryButtonProps> = ({
  label,
  additionalStyles,
  disabled = false,
  onClick,
}) => {
  return (
    <Button
      variant="contained"
      sx={{
        color: 'white',
        textTransform: 'none',
        fontSize: '16px',
        fontWeight: 600,
        width: '100%',
        height: '40px',
      }}
      style={additionalStyles ? additionalStyles : {}}
      disabled={disabled}
      onClick={onClick}
    >
      {label}
    </Button>
  );
};

export default CustomPrimaryButton;