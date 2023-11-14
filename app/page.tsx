import AuthForms from "@/components/AuthForms/AuthForms";
import Link from "next/link";
import styles from '@/styles/homepage.module.scss';

export default function PrimaryPage() {
  return (
    <main className={styles.main}>
      <section className={styles.header}>
        <h1>Home page</h1>
        <Link className={styles.link} href='/cabinet'>Cabinet</Link>  
      </section>
      <AuthForms />
    </main>
  )
}