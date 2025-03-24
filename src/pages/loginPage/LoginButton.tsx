import React from 'react';
import CustomPrimaryButton from '../../components/CustomPrimaryButton';

interface LoginButtonProps {
  handleLogin: () => void;
  isFormValid: boolean;
}

const LoginButton: React.FC<LoginButtonProps> = ({ handleLogin, isFormValid }) => {
  return (
    <div>
      <CustomPrimaryButton
        label="Log in"
        additionalStyles={{ marginTop: '30px' }}
        disabled={!isFormValid} 
        onClick={handleLogin}
      />
    </div>
  );
};

export default LoginButton;
