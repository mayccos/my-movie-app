import MediaDetails from "@/components/media-details/MediaDetails";
import SimilarMedias from "@/components/similar-medias/SimilarMovies";
import { getMediaByPath } from "@/utils/mediaClient";
import { notFound } from "next/navigation";
import { Suspense } from "react";

export const dynamic = "force-static";
export const revalidate = 3600;

const SerieIdPage = async ({ params: { id, locale } }) => {
  const serie = await getMediaByPath(`/tv/${id}`, [], locale);

  if (!serie.original_title) {
    return notFound();
  }
  return (
    <div>
      <MediaDetails movie={serie} locale={locale} />
      <Suspense fallback={<p>Chargement...</p>}>
        <SimilarMedias movieId={serie.id} locale={locale} />
      </Suspense>
    </div>
  );
};

export default SerieIdPage;
