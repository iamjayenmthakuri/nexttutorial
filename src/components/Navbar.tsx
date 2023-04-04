import Link from "next/link";
import styles from "../styles/Navbar.module.css";

function Navbar() {
  return (
    <>
      <div className={styles.Navbar}>
        <div className={styles.Link}>
          <Link href="/">Home</Link>
          <Link href="/about">Profile</Link>
          <Link href="/profile">About </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
