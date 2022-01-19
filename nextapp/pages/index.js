import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Home Page</h1>
      <Link href="/docs">
        <a>Doc Page</a>
      </Link>
      <Link href="/users">
        <a>Users Page</a>
      </Link>
    </div>
  );
}
