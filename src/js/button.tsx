// button.tsx
import React, { MouseEvent } from 'react';
//import styled from "styled-components";

type ButtonProps = {
	onClick:
		| ((event: React.MouseEvent<HTMLButtonElement>) => void)
		| any;
};

const Button: React.FC<ButtonProps> = ({ onClick }) => {
	const handleOnClick = (e: MouseEvent<HTMLButtonElement>) : void => {
		onClick(e);
	};

	return <button onClick={handleOnClick}>Search</button>;
};

export { Button };

//const ButtonStyles = styled.button``;
