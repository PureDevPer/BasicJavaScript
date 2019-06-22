fetch('https://yts.lt/api/v2/list_movies.json')
	.then(response => {
		console.log(response);
		return response.json();
	})
	.then(json => console.log(json))
	.catch(e => console.log(`❌ ${e}`));
