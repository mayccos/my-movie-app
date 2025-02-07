import { getMediaByPath } from "@/utils/mediaClient";
import Link from "next/link";
import styles from "./Genres.module.scss";
import { getDictionary } from "@/utils/dictionaries";

const Genres = async ({ locale, media, medias }) => {
  const { genres } = await getMediaByPath(`/genre/${media}/list`, [], locale);
  const i18n = await getDictionary(locale);
  return (
    <div>
      <h2>
        {media == "movie"
          ? `${i18n.genres.title.movie}`
          : `${i18n.genres.title.serie}`}
      </h2>
      <div className={styles.container}>
        {genres.map((genre) => (
          <div key={genre.id} className={styles.genre}>
            <Link href={`${locale}/${medias}/genres/${genre.id}`}>
              <p>{genre.name}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Genres;
