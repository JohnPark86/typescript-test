import React from 'react';
declare type InputProps = {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
declare const Input: React.FC<InputProps>;
export { Input };
