import styles from "./SubmitButton.module.css";

function SubmitButton({ btnText }) {
  return (
    <div className={styles.submitButton}>
      <button>{btnText}</button>
    </div>
  );
}

export default SubmitButton;
