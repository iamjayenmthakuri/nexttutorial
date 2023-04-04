import Link from "next/link";
import styles from "../styles/Home.module.css";

function PageNotFound() {
  return (
    <>
      <h2>Page Not Found</h2>
      <Link href="/">
        Click Here To go <span className={styles.link}>Home </span>
      </Link>
    </>
  );
}

export default PageNotFound;
