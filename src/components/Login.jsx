import styles from "./Login.module.css";
import blossomFlower from "../assets/blossom-flower.svg";

function Login() {
  return (
    <main className={styles.page}>
      <section className={styles.leftSection}>
        <h1 className={styles.title}>Welcome back!</h1>
        
        <p className={styles.subtitle}>
             Enter your Credentials to access your account
        </p>

        <form className={styles.form}>
            <div className={styles.field}>
            <label htmlFor="email">Email address</label>
            <input
                id="email"
                type="email"
                placeholder="Enter your email"
                required
            />
            </div>

            <div className={styles.field}>
            <label htmlFor="password">Password</label>
            <input
                id="password"
                type="password"
                placeholder="Enter your password"
                required
            />
            </div>

            <label className={styles.terms}>
            <input type="checkbox" required />
            <span>Remember 30 days</span>
            </label>

            <button type="submit" className={styles.LoginButton}>
            Login
            </button>
        </form>        
            <div className={styles.divider}>
            <span>Or</span>
            </div>

            <div className={styles.socialButtons}>
            <button type="button" className={styles.socialButton}>
                <img
                src="/src/assets/icons-google-logo.svg"
                alt=""
                />
                <span>Sign in with Google</span>
            </button>

            <button type="button" className={styles.socialButton}>
                <img
                src="/src/assets/icons-apple-logo.svg"
                alt=""
                />
                <span>Sign in with Apple</span>
            </button>
            </div>
            <p className={styles.accountText}>
            Don't have an account?{" "}
            <a href="#" onClick={(event) => event.preventDefault()}>
                Sign Up
            </a>
         </p>

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

export default Login;
