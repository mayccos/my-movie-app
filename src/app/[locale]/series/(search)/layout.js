import SearchSideBar from "@/components/search-sidebar/SearchSideBar";

import styles from "./layout.module.scss";
import { getMediaByPath } from "@/utils/mediaClient";

const SerieSearchLayout = async ({ children, params: { locale } }) => {
  const { genres } = await getMediaByPath("/genre/tv/list", [], locale);
  console.log(genres);

  return (
    <div className={styles.searchContainer}>
      <SearchSideBar genres={genres} media="series" />
      <div>{children}</div>
    </div>
  );
};

export default SerieSearchLayout;
