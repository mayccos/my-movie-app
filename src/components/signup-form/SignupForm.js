"use client";

import styles from "./SignupForm.module.scss";

import React from "react";
import { signIn } from "next-auth/react";

const SignupForm = () => {
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
  return (
    <div className={styles.signupForm}>
      <form onSubmit={handleFormSubmit}>
        <h1>Inscription</h1>
        <input type="text" name="email" placeholder="E-mail" />
        <input type="password" name="password" placeholder="**********" />
        <input className={styles.submit} type="submit" value="S'inscrire" />
      </form>
    </div>
  );
};

export default SignupForm;
