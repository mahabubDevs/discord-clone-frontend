import React, { FC } from 'react';
import InputWithLabel from '../../components/InputWithLevel';


interface RegisterPageInputsProps {
    userName: string;
    setUserName: (value: string) => void;
    mail: string;
    setMail: (value: string) => void;
    password: string;
    setPassword: (value: string) => void;
}

const RegisterPageInputs: FC<RegisterPageInputsProps> = ({userName, setUserName, mail, setMail, password, setPassword }) => {
    return (
        <>
            <InputWithLabel
                value={userName}
                setValue={setUserName}
                label="User Name"
                type="text"
                placeholder="Enter user name"
            />
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

export default RegisterPageInputs;
