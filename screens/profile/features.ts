export  const FetchMovie = async ( title:string,) => {

    function replaceWhitespaceWithPercent20() {
        return title.replace(/\s/g, '%20');
      }

    // const url = `https://api.themoviedb.org/3/search/movie?query=${replaceWhitespaceWithPercent20()}&include_adult=false&language=en-US&page=1`;
    const url = `https://api.themoviedb.org/3/search/multi?query=${replaceWhitespaceWithPercent20()}&include_adult=true&language=en-US&page=1`;
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MWFiZTM1MjQyNjFiYTM0MjJhMWY0NDZjZmU1NDZlYyIsInN1YiI6IjY0Y2Y1Yzg0NTQ5ZGRhMDBhY2YwNmRlYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OZUPKNGLFLlEBMo_-HZnAy4ieGSRqu7LTwvPxaAF_z4'
        }
      };

      let results:any =  await fetch(url, options).then((res) => res.json()).then((res) => results = res.results)
      
      return results
}

export const FetchPremierLeague = async () => {
  const url = 'https://livescore-sports.p.rapidapi.com/v1/competitions/revs-standings?timezone=0&locale=EN&country_slug=england&stage_slug=premier-league&sport=soccer';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b53656c636msh7f1b82d33b1f3a2p129a1fjsn30c3e6c25735',
		'X-RapidAPI-Host': 'livescore-sports.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}
}








const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MWFiZTM1MjQyNjFiYTM0MjJhMWY0NDZjZmU1NDZlYyIsInN1YiI6IjY0Y2Y1Yzg0NTQ5ZGRhMDBhY2YwNmRlYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OZUPKNGLFLlEBMo_-HZnAy4ieGSRqu7LTwvPxaAF_z4'
  }
};

