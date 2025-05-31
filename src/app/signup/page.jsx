"use client";
import Input from "@/components/input/Input";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import styles from "./page.module.css";
import { useStore } from "@/store/useStore";

const page = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const router = useRouter();

  const login = useStore((state) => state.login);
  const user = useStore((state) => state.user);
  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const newUser = {
      username,
      email,
      password,
    };

    localStorage.setItem("user", JSON.stringify(newUser));

    login(newUser);

    router.push("/signin");
  };

  console.log("user", user);
  return (
    <div className={styles.wrapper}>
      <div className={styles.window}>
        <div className={styles.windowHeader}>
          <span className={styles.windowTitle}>Signup</span>
          <div className={styles.controls}>
            <span className={`${styles.circle} ${styles.red}`}></span>
            <span className={`${styles.circle} ${styles.yellow}`}></span>
            <span className={`${styles.circle} ${styles.green}`}></span>
          </div>
        </div>
        <h2 className={styles.heading}>Sign up</h2>
        <form className={styles.form} onSubmit={handleSubmit}>
          <Input
            label={"Username"}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            label={"Email"}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
          />
          <Input
            label={"Password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input
            label={"Confirm Password"}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <div className={styles.buttons}>
            <button type="submit" className={styles.registerBtn}>
              Register
            </button>
            <button
              type="button"
              className={styles.loginBtn}
              onClick={() => router.push("/signin")}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default page;
