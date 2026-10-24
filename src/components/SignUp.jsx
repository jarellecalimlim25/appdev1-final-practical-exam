import styles from "./SignUp.module.css";
import blossomFlower from "../assets/blossom-flower.svg";

function SignUp() {
  return (
    <main className={styles.page}>
      <section className={styles.leftSection}>
        <section className={styles.leftSection}>
            <h1 className={styles.title}>Get Started Now</h1>
        </section>

      </section>

      <section className={styles.rightSection}>
        <img
          src={blossomFlower}
          alt="Blossom flower"
          className={styles.flower}
        />
      </section>
    </main>
  );
}

export default SignUp;
