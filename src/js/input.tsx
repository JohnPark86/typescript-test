import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
	height: 2.5em;
	border-radius: 10px;
	border: 2px solid limegreen;
	width: 25em;
`;

type InputProps = {
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input: React.FC<InputProps> = ({ value, onChange }) => {
	const onChangeHandler: React.ChangeEventHandler<HTMLInputElement> = (
		e
	): void => {
		onChange(e);
	};

	return (
		<div>
			<StyledInput type='text' value={value} onChange={onChangeHandler} />
		</div>
	);
};

export { Input };
