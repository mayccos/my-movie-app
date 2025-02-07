import MediaDetails from "@/components/media-details/MediaDetails";
import SimilarMovies from "@/components/similar-medias/SimilarMovies";
import { getMediaByPath } from "@/utils/mediaClient";
import { notFound } from "next/navigation";
import { Suspense } from "react";

export const dynamic = "force-static";
export const revalidate = 3600;

const MovieIdPage = async ({ params: { id, locale } }) => {
  const movie = await getMediaByPath(`/movie/${id}`, [], locale);

  if (!movie.original_title) {
    return notFound();
  }
  return (
    <div>
      <MediaDetails movie={movie} locale={locale} />
      <Suspense fallback={<p>Chargement...</p>}>
        <SimilarMovies movieId={movie.id} locale={locale} />
      </Suspense>
    </div>
  );
};

export default MovieIdPage;
