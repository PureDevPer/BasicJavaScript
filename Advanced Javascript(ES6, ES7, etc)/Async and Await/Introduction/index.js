const getMoviesPromise = () => {
	fetch('https://yts.lt/api/v2/list_movies.json')
		.then(response => {
			console.log(response);
			return response.json();
		})
		.then(json => console.log(json))
		.catch(e => console.log(`❌ ${e}`));
};

const getMoviesAsync = async () => {
	const response = await fetch('https://yts.lt/api/v2/list_movies.json');
	const json = await response.json();
	console.log(response);
};

getMoviesAsync();
