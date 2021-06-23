import React from 'react';
declare type ButtonProps = {
    onClick: ((event: React.MouseEvent<HTMLButtonElement>) => void) | any;
};
declare const Button: React.FC<ButtonProps>;
export { Button };
