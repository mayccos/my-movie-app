import { getMediaByPath } from "@/utils/mediaClient";
import styles from "./SearchResults.module.scss";
import SerieCard from "@/components/media-card/SerieCard";

const SearchResults = async ({ searchParams, genreId, locale }) => {
  const { results } = await getMediaByPath(
    "/discover/tv",
    [
      { key: "sort_by", value: searchParams.sort_by },
      { key: "release_date.gte", value: searchParams["release_date.gte"] },
      { key: "release_date.lte", value: searchParams["release_date.lte"] },
      { key: "with_genres", value: genreId },
    ],
    locale
  );
  return (
    <div className={styles.results}>
      {results
        .filter((serie) => serie.poster_path)
        .map((serie) => (
          <SerieCard key={serie.id} media={serie} locale={locale} />
        ))}
    </div>
  );
};

export default SearchResults;
