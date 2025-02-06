import SearchSideBar from "@/components/search-sidebar/SearchSideBar";

import styles from "./layout.module.scss";
import { getMediaByPath } from "@/utils/mediaClient";

const MovieSearchLayout = async ({ children, params: { locale } }) => {
  const { genres } = await getMediaByPath("/genre/movie/list", [], locale);
  return (
    <div className={styles.searchContainer}>
      <SearchSideBar genres={genres} />
      <div>{children}</div>
    </div>
  );
};

export default MovieSearchLayout;
