import { getMediaByPath } from "@/utils/mediaClient";
import styles from "./SimilarMedias.module.scss";

import React from "react";

import MovieCard from "../media-card/MovieCard";

const SimilarMovies = async ({ movieId, locale }) => {
  const { results } = await getMediaByPath(
    `/movie/${movieId}/similar`,
    [],
    locale
  );

  return (
    <div className={styles.similar}>
      <div className={styles.list}>
        {results.slice(0, 6).map((movie) => (
          <MovieCard media={movie} key={movie.id} locale={locale} />
        ))}
      </div>
    </div>
  );
};

export default SimilarMovies;
