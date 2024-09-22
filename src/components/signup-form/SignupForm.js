"use client";

import styles from "./SignupForm.module.scss";

import React, { useEffect } from "react";
import { signIn, useSession } from "next-auth/react";
import traductionPage from "@/utils/translatedText";
import { useRouter } from "next/navigation";

const SignupForm = () => {
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/user/profile");
    }
  }, [status, router]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    fetch("/api/signup", {
      method: "POST",
      body: JSON.stringify({
        email: formData.get("email"),
        password: formData.get("password"),
      }),
    }).then((response) => {
      if (response.ok) {
        signIn();
      }
    });
  };
  const { ...text } = traductionPage();
  return (
    <div className={styles.signupForm}>
      <form onSubmit={handleFormSubmit}>
        <h1>Inscription</h1>
        <input type="text" name="email" placeholder="E-mail" />
        <input type="password" name="password" placeholder="**********" />
        <input className={styles.submit} type="submit" value={text[9]} />
      </form>
    </div>
  );
};

export default SignupForm;
