import Link from "next/link";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>NextTutorial</title>
      </Head>
      <div className={styles.homePageTitle}>Hello</div>
      <Link href="/about">About</Link>
    </>
  );
}
