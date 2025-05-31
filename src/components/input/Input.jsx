import React from "react";
import styles from "./Input.module.css";

const Input = ({ label, type, value, onChange, placeholder }) => {
  return (
    <div className={styles.inputGroup}>
      <label className={styles.label}>{label}</label>
      <input
        className={styles.input}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
       
      />
    </div>
  );
};

export default Input;
