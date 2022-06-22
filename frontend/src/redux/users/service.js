const addUser = async (mydata) => {
  const {name, age} = mydata;
	const response = await fetch(
		'http://localhost:3001/users',
		{
			method: 'POST',
			headers: {
				'Content-Type':
					'application/json',
			},
			body: JSON.stringify({name, age}),
		}
	);

	const data = await response.json();
	if (!response.ok) {
		const errorMsg = data?.message;
		throw new Error(errorMsg);
	}
  console.log(data);
	return data;
};

const getUsers = async () => {
	const response = await fetch(
		'http://localhost:3001/users',
		{
			method: 'GET',
		}
	);
	return response.json();
};


export default {
	addUser,
	getUsers,
};
