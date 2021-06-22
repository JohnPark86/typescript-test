import React, { useState, useEffect } from 'react';

type Props = {
	userName: string;
	lang: string;
};

const App: React.FC<Props> = ({ userName, lang }) => {
	const [data, setData] = useState({uName : '', welcomeLang: ''});

	useEffect(() => {
		setData({uName: userName, welcomeLang:lang})
	});

	return (
		<h1>
			Hi {data.uName} from React! Welcome to {data.welcomeLang}!
		</h1>
	);
};

export { App };
