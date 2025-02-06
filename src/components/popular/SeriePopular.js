import { getMediaByPath } from "@/utils/mediaClient";
import SerieCard from "../media-card/SerieCard";
import styles from "./Popular.module.scss";
import { getDictionary } from "@/utils/dictionaries";

const SeriePopular = async ({ locale }) => {
  const { results } = await getMediaByPath(`/tv/popular`, [], locale);
  const i18n = await getDictionary(locale);
  const popularSeries = results.slice(0, 6);

  return (
    <div>
      <h2>{i18n.popular.title.serie}</h2>
      <div className={styles.container}>
        {popularSeries.map((tv) => (
          <SerieCard key={tv.id} media={tv} locale={locale} />
        ))}
      </div>
    </div>
  );
};

export default SeriePopular;
