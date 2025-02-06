import React from "react";
import SearchResults from "./SearchResults";

const SeriesPage = ({ params: { locale }, searchParams }) => {
  return <SearchResults searchParams={searchParams} locale={locale} />;
};

export default SeriesPage;
