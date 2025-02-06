import LogoutButton from "@/components/logout-button/LogoutButton";
import styles from "./page.module.scss";
import { getServerSession } from "next-auth";
import prisma from "@/utils/prisma";
import { getHydratedMedias } from "@/utils/mediaClient";
import MediaCard from "@/components/media-card/MovieCard";

const ProfilePage = async ({ params: { locale } }) => {
  const { user: userSession } = await getServerSession();

  const { posts } = await prisma.user.findFirst({
    where: { email: userSession.email },
    include: {
      posts: true,
    },
  });

  const movies = await getHydratedMedias(posts.map((movie) => movie.movieId));
  return (
    <div className={styles.profile}>
      <div className={styles.head}>
        <h1>Liste des films aimés</h1>
        <LogoutButton />
      </div>
      <div className={styles.list}>
        {movies.map((movie) => (
          <MediaCard media={movie} locale={locale} key={movie.id} />
        ))}
      </div>
    </div>
  );
};
export default ProfilePage;
