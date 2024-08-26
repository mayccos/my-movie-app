import "server-only";

export const getMovieByPath = (path, language = "fr-FR") => {
  const url = new URL(`https://api.themoviedb.org/3${path}`);
  url.searchParams.append("api_key", process.env.TMDB_API_KEY);
  url.searchParams.append("language", language);

  return fetch(url).then((res) => res.json());
};
