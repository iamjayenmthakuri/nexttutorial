import Link from "next/link";
import styles from "../styles/Navbar.module.css";

function Navbar() {
  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.Link}>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/profile">Profile </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
