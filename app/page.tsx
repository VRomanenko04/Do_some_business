import AuthForms from "@/components/AuthForms/AuthForms";
import Link from "next/link";
import styles from '@/styles/homepage.module.scss';
import HomeHeader from "@/components/HomeHeader/HomeHeader";

export default function PrimaryPage() {
  return (
    <main className={styles.main}>
      <HomeHeader />
      <AuthForms />
    </main>
  )
}