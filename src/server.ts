import express from 'express';

const app = express();

app.use(express.json());

app.get('/users', (_request, response) => {
	const users = [
		{
			name: 'Cristiano Ronaldo',
			status: true
		},
		{
			name: 'Lionel Messi',
			status: true
		},
		{
			name: 'Neymar Júnior',
			status: false
		}
	];

	response.status(200).json(users);
});

app.use((_request, response) => {
	response.status(404).json({
		message: 'Not found!'
	});
});

app.listen(Number(process.env.PORT));
