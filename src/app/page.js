import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
   <div className={styles.page}>
      <main className={styles.main}>
        <h1>Welcome to Note App!</h1>
        <p>Your app is ready. Start building your note-taking features.</p>
        <p><strong>Please login to continue.</strong></p>
      </main>

      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} Note App</p>
      </footer>
    </div>
  );
}
