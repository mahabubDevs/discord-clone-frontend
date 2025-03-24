import React from 'react';
import CustomPrimaryButton from '../../components/CustomPrimaryButton';
import RedirectInfo from '../../components/RedirectInfo';
import { useNavigate } from 'react-router-dom';



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
      <div>
      <CustomPrimaryButton
        label="Log in"
        additionalStyles={{ marginTop: '30px' }}
        disabled={!isFormValid} 
        onClick={handleLogin}
      />
      </div>
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
