import { styled } from '@mui/material';
import React, { FC } from 'react';

interface InputWithLabelProps {
    value: string;
    setValue: (value: string) => void;
    label: string;
    type?: string;
    placeholder?: string;
}

const Wrapper = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    
    width: '100%',
});
    
const Label = styled('p')({
    color: '#b9bbbe',
    textTransform: 'uppercase',
    fontSize: '16px',
    fontWeight: 600,
});

const Input = styled('input')({
    flexGrow: 1,
    height: '40px',
    border: '1px solid black',
    borderRadius: '5px',
    color: '#dcddde',
    background: '#35393f',
    margin: 0,
    fontSize: '16px',
    padding: '0 5px',
});

const InputWithLabel: FC<InputWithLabelProps> = ({ value, setValue, label, type = 'text', placeholder }) => {
    const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };
    
    return (
        <Wrapper>
            <Label>{label}</Label>
            <Input
                type={type}
                value={value}
                onChange={handleValueChange}
                placeholder={placeholder}
            />
        </Wrapper>
    );
};

export default InputWithLabel;
