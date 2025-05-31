"use client";

import Input from "@/components/input/Input";
import { useStore } from "@/store/useStore";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import styles from "./page.module.css";
import Toast from "@/components/Toast/Toast";

const Page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const login = useStore((state) => state.login);
  const router = useRouter();
  const user = useStore((state) => state.user);
  const [toast, setToast] = useState(null);
  const showToast = (msg, type) => {
    setToast({ message: msg, type });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      showToast("Fill all the fields!", "error");
      return;
    }

    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (!savedUser) {
      showToast("No user found. Please sign up.", "error");
      return;
    }

    if (email === savedUser.email && password === savedUser.password) {
      login(savedUser);
      showToast("Login successful!", "success");
      router.push("/homepage");
    } else {
      showToast("Invalid credentials", "error");
    }
  };

  console.log("user======>", user);
  return (
    <div className={styles["login-window"]}>
      <div className={styles["window-header"]}>
        <span className={styles["window-title"]}>Login</span>
        <div className={styles["window-controls"]}>
          <span className={`${styles.circle} ${styles.red}`}></span>
          <span className={`${styles.circle} ${styles.yellow}`}></span>
          <span className={`${styles.circle} ${styles.green}`}></span>
        </div>
      </div>

      <div className={styles["login-container"]}>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <label>Email</label>
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />

          <label>Password</label>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />

          <div className={styles["button-group"]}>
            <button
              className={`${styles.btn} ${styles["login-btn"]}`}
              type="submit"
            >
              Login
            </button>
            <button
              className={`${styles.btn} ${styles["register-btn"]}`}
              type="button"
              onClick={() => {
                router.push("/signup");
              }}
            >
              Register
            </button>
          </div>
        </form>
      </div>
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </div>
  );
};

export default Page;
