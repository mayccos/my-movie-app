import { getMediaByPath } from "@/utils/mediaClient";
import MovieCard from "../media-card/MovieCard";
import styles from "./Popular.module.scss";
import { getDictionary } from "@/utils/dictionaries";

const MoviePopular = async ({ locale }) => {
  const { results } = await getMediaByPath(`/movie/popular`, [], locale);
  const i18n = await getDictionary(locale);
  const popularMovies = results.slice(0, 6);

  return (
    <div>
      <h2>{i18n.popular.title.movie}</h2>
      <div className={styles.container}>
        {popularMovies.map((movie) => (
          <MovieCard key={movie.id} media={movie} locale={locale} />
        ))}
      </div>
    </div>
  );
};

export default MoviePopular;
