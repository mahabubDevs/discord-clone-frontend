import React from 'react';
import CustomPrimaryButton from '../../components/CustomPrimaryButton';
import RedirectInfo from '../../components/RedirectInfo';
import { useNavigate } from 'react-router-dom';
import { Tooltip } from '@mui/material';



interface RegisterButtonProps {
  handleRegister: () => void;
  isFormValid: boolean;
}

  

const RegisterButton: React.FC<RegisterButtonProps> = ({ handleRegister, isFormValid }) => {
  const navigate = useNavigate();

  const handlePushToRegister = () => {
    navigate('/login');
  };
  return (
    <>
      <Tooltip title={!isFormValid ? "Please correct User name & E-mail and Password up to 6 characters to 12 characters" :"Press to log in!"} >
      <div>
      <CustomPrimaryButton
        label="Register Now"
        additionalStyles={{ marginTop: '15px' }}
        disabled={!isFormValid} 
        onClick={handleRegister}
          />
          
        </div>
        </Tooltip>
      <RedirectInfo
        text='I have a account? '
        redirectText='Login to account'
        additionalStyles={{ marginTop: '5px' }}
        redirectHandler={handlePushToRegister}
      />
    </>
  );
};

export default RegisterButton;
