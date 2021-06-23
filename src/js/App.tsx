import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Input } from './input';
import { Button } from './button';

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 5em;
`;

const App: React.FC = () => {
	const [data, setData] = useState('');

	useEffect(() => {});

	const updateInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
		setData(e.currentTarget.value);
	};

	const onClick = (): void => {
		fetchData(data);
	};

	const fetchData = (data: string): void => {
		console.log(data);
		setData(data);
	};

	return (
		<Container>
			<Input onChange={updateInput} value={data} />
			<Button onClick={onClick} />
		</Container>
	);
};

export { App };
