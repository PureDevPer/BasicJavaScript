const getMoviesAsync = async () => {
	try {
		const [moviesResponse, suggestionsResponse] = await Promise.all([
			fetch('https://yts.lt/api/v2/list_movies.json'),
			fetch('https://yts.lt/api/v2/list_movies.json?movie_id=1000')
		]);

		const [movies, suggestions] = await Promise.all([
			moviesResponse.json(),
			suggestionsResponse.json()
		]);
		console.log(movies, suggestions);
		//throw Error('Error');
	} catch (e) {
		console.log(`❌ ${e}`);
	} finally {
		console.log('We are done!');
	}
};

getMoviesAsync();
