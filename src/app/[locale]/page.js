import Genres from "@/components/genres/Genres";
import MoviePopular from "@/components/popular/MoviePopular";
import styles from "./page.module.css";
import SeriePopular from "@/components/popular/SeriePopular";

export default function Home({ params: { locale } }) {
  return (
    <div className={styles.main}>
      <MoviePopular locale={locale} />
      <Genres locale={locale} media={"movie"} medias="movies" />

      <SeriePopular locale={locale} />
      <Genres locale={locale} media={"tv"} medias="series" />
    </div>
  );
}
