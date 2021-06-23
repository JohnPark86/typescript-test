import React, { useState, useEffect } from 'react';

type InputProps = {
	onChange: (e: React.ChangeEvent<HTMLInputElement> ) => void;
};

const Input: React.FC<InputProps> = ({ onChange }) => {
	const [value, setValue] = useState('');
	useEffect(() => {});

	const onChangeHandler: React.ChangeEventHandler<HTMLInputElement> = (e) : void => {
		let val = e.currentTarget.value;
		setValue(val);
		onChange(e);
	};

	return (
		<div>
			<input type='text' value={value} onChange={onChangeHandler} />
		</div>
	);
};

export { Input };
