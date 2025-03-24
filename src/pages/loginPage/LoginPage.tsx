import React, { useEffect, useState } from 'react';
import AuthBox from '../../components/AuthBox';
import LoginHead from './LoginHead';
import LoginPageInputs from './LoginPageInputs';
import LoginButton from './LoginFooter';
import { validateLoginForm } from '../../utils/validators';

const LoginPage: React.FC = () => {
  const [mail, setMail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isFormValid, setIsFormValid] = useState<boolean>(false);
  
  useEffect(() => {
    setIsFormValid(validateLoginForm({ mail, password }));
  }, [mail, password, setIsFormValid]);
  const handleLogin = (): void => {
    console.log(mail)
    console.log(password)
    console.log('Login button clicked');
  };

  return (
    <AuthBox>
      <LoginHead />
      <LoginPageInputs
        mail={mail}
        setMail={setMail}
        password={password}
        setPassword={setPassword}
      />
      <LoginButton
        isFormValid={isFormValid}
        handleLogin={handleLogin}
      />
    </AuthBox>
  );
};

export default LoginPage;
