import React, { FC } from 'react';
import InputWithLabel from '../../components/InputWithLevel';


interface LoginPageInputsProps {
    mail: string;
    setMail: (value: string) => void;
    password: string;
    setPassword: (value: string) => void;
}

const LoginPageInputs: FC<LoginPageInputsProps> = ({ mail, setMail, password, setPassword }) => {
    return (
        <>
            <InputWithLabel
                value={mail}
                setValue={setMail}
                label="E-mail"
                type="email"
                placeholder="Enter e-mail"
            />
            <InputWithLabel
                value={password}
                setValue={setPassword}
                label="Password"
                type="password"
                placeholder="Enter password"
            />
        </>
    );
};

export default LoginPageInputs;
