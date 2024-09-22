"use client";

import { useState } from "react";
import { DebounceInput } from "react-debounce-input";
import MovieSearchResults from "./movieSearchResults/MovieSearchResults";
import styles from "./MovieSearch.module.scss";
import { useParams } from "next/navigation";
import { useCurrentLanguage } from "@/hooks/useCurrentLanguage";

const MovieSearch = () => {
  const [movieResults, setMovieResults] = useState([]);
  const [hasFocus, setHasFocus] = useState(false);
  const currentLanguage = useCurrentLanguage();

  const textPlaceholder = () => {
    const params = useParams();

    if (params.locale == "fr") {
      return "Rechercher un titre...";
    } else {
      return "Search for a title...";
    }
  };

  const updateMovieSearch = async (query) => {
    const response = await fetch(`/api/movies/search?query=${query}`);
    const { results } = await response.json();

    setMovieResults(results.filter((movie) => movie.backdrop_path));
  };

  return (
    <div className={styles.searchContainer}>
      <DebounceInput
        minLength={2}
        debounceTimeout={500}
        onChange={(e) => updateMovieSearch(e.target.value)}
        placeholder={textPlaceholder()}
        onBlurCapture={() => setHasFocus(false)}
        onFocus={() => setHasFocus(true)}
      />
      {movieResults.length > 0 && hasFocus && (
        <MovieSearchResults
          movieResults={movieResults}
          locale={currentLanguage}
        />
      )}
    </div>
  );
};

export default MovieSearch;
