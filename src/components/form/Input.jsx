import styles from "./Input.module.css";

import React from "react";

const Input = ({
  type,
  text,
  name,
  placeholder,
  value,
  onChange,
  required,
}) => {
  return (
    <div>
      <label className={styles.form_control}>
        {text}:
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
        />
      </label>
    </div>
  );
};

export default Input;
