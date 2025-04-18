import React from 'react';
import CustomPrimaryButton from '../../components/CustomPrimaryButton';
import RedirectInfo from '../../components/RedirectInfo';
import { useNavigate } from 'react-router-dom';
import { Tooltip } from '@mui/material';



interface LoginButtonProps {
  handleLogin: () => void;
  isFormValid: boolean;
}

  

const LoginButton: React.FC<LoginButtonProps> = ({ handleLogin, isFormValid }) => {
  const navigate = useNavigate();

  const handlePushToRegister = () => {
    navigate('/register');
  };
  return (
    <>
      <Tooltip title={!isFormValid ? "Please correct Email and Password up to 6 characters to 12 characters" :"Press to log in!"} >
      <div>
      <CustomPrimaryButton
        label="Log in"
        additionalStyles={{ marginTop: '35px' }}
        disabled={!isFormValid} 
        onClick={handleLogin}
          />
          
        </div>
        </Tooltip>
      <RedirectInfo
        text='Need an account? '
        redirectText='Create an account'
        additionalStyles={{ marginTop: '5px' }}
        redirectHandler={handlePushToRegister}
      />
    </>
  );
};

export default LoginButton;
