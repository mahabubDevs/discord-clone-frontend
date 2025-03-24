import React, { useEffect, useState } from 'react';
import AuthBox from '../../components/AuthBox';
import RegisternHead from './RegisterHead';
import RegisterPageInputs from './RegisterPageInputs';
import RegisterButton from './RegisterFooter';
import { validateRegisterForm } from '../../utils/validators';

const RegistrationPage: React.FC = () => {
  const [userName, setUserName] = useState<string>('');
  const [mail, setMail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isFormValid, setIsFormValid] = useState<boolean>(false);
  
  useEffect(() => {
    setIsFormValid(validateRegisterForm({userName, mail, password }));
  }, [ userName, mail, password, setIsFormValid]);
  const handleRegister = (): void => {
    console.log(userName)
    console.log(mail)
    console.log(password)
    console.log('Register button clicked');
  };

  return (
    <AuthBox>
      <RegisternHead />
      <RegisterPageInputs
        userName={userName}
        setUserName={setUserName}
        mail={mail}
        setMail={setMail}
        password={password}
        setPassword={setPassword}
      />
      <RegisterButton
        isFormValid={isFormValid}
        handleRegister={handleRegister}
      />
    </AuthBox>
  );
};

export default RegistrationPage;

