import Genres from "@/components/genres/Genres";
import MoviePopular from "@/components/popular/MoviePopular";
import styles from "./page.module.css";
import SeriePopular from "@/components/popular/SeriePopular";

export default function Home({ params: { locale } }) {
  return (
    <div className={styles.main}>
      <MoviePopular locale={locale} />
      <SeriePopular locale={locale} />
      <Genres locale={locale} />
    </div>
  );
}
