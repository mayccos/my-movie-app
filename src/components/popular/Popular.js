import { getMovieByPath } from "@/utils/movieClient";
import MediaCard from "../media-card/MediaCard";
import styles from "./Popular.module.scss";

const Popular = async () => {
  const { results } = await getMovieByPath("/movie/popular");

  console.log(results);

  const popularMovies = results.slice(0, 6);
  return (
    <div>
      <h2>Les plus populaires</h2>
      <div className={styles.container}>
        {/* {popularMovies.map((movie) => (
          <MediaCard key={movie.id} media={movie} />
        ))} */}
      </div>
    </div>
  );
};

export default Popular;
