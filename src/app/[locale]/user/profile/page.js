import LogoutButton from "@/components/logout-button/LogoutButton";
import React from "react";

const ProfilePage = () => {
  return (
    <div>
      <h1>Vous êtes connecté(e)</h1>
      <LogoutButton />
    </div>
  );
};

export default ProfilePage;
