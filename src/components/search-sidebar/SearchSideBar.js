"use client";

import { notFound, useParams, useSelectedLayoutSegment } from "next/navigation";
import styles from "./SearchSidebar.module.scss";
import Form from "./form/Form";

const SearchSideBar = ({ genres }) => {
  const segment = useSelectedLayoutSegment();
  const { id, locale } = useParams();

  const getSidebarTitle = () => {
    if (!segment) {
      if (locale == "en") {
        return "Movies";
      } else {
        return "Films";
      }
    }
    const genre = genres.find((genre) => genre.id === Number(id));
    if (!genre) {
      return notFound();
    }
    return genre.name;
  };

  const title = getSidebarTitle();

  return (
    <div className={styles.sidebar}>
      <h1>
        {locale == "en" ? "All" : "Tous les"} "{title}"
      </h1>
      <Form />
    </div>
  );
};

export default SearchSideBar;
