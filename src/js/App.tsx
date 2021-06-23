import React, { useState, useEffect } from 'react';
import { Input } from './input';
import { Button } from './button';

// type Props = {
// 	userName: string;
// 	lang: string;
// };

const App: React.FC = () => {
	const [data, setData] = useState('');

	useEffect(() => {});

	const updateInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
		console.log(e);
	};

	const onClick = (e: any): void => {
		console.log(e);
		fetchData(data);
	};

	const fetchData = (data: string): void => {
		console.log(data);
		setData(data)
	};

	return (
		<div>
			<h1>Search</h1>
			<Input onChange={updateInput} />
			<Button onClick={onClick} />
		</div>
	);
};

export { App };
