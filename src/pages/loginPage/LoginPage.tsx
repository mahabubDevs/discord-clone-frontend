import React from 'react'
import AuthBox from '../../components/AuthBox'
import LoginHead from './LoginHead'
import LoginPageInputs from './LoginPageInputs'

const LoginPage: React.FC = () => {
  const [mail, setMail] = React.useState('');
  const [password, setPassword] = React.useState('');
  return (
    <AuthBox>
      <LoginHead />
      <LoginPageInputs
      mail={mail}
      setMail={setMail}
      password={password}
      setPassword={setPassword}
      />
    </AuthBox>
  )
}

export default LoginPage
