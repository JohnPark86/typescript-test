import React, { MouseEvent } from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
	color: orange;
	font-size: 1em;
	margin: 1em;
	padding: 0.5em;
	border: 2px solid limegreen;
	border-radius: 10px;
`;

type ButtonProps = {
	onClick: ((event: React.MouseEvent<HTMLButtonElement>) => void) | any;
};

const Button: React.FC<ButtonProps> = ({ onClick }) => {
	const handleOnClick = (e: MouseEvent<HTMLButtonElement>): void => {
		onClick(e);
	};

	return <StyledButton onClick={handleOnClick}>Search</StyledButton>;
};

export { Button };
