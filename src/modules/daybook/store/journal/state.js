export default () => ({
	isLoading: true,
	entries: [
		{
			id: new Date().getTime(),
			date: new Date().toDateString(),
			text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, ea.',
			picture: null, //https://
		},
		{
			id: new Date().getTime() + 1000,
			date: new Date().toDateString(),
			text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci perferendis quibusdam sit laboriosam delectus optio?',
			picture: null, //https://
		},
		{
			id: new Date().getTime() + 2000,
			date: new Date().toDateString(),
			text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, odio totam quo eius eveniet vel. Saepe, corporis praesentium?',
			picture: null, //https://
		}
	]
})