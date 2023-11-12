import RegisterForm from "@/components/RegisterForm/RegisterForm";
import Link from "next/link";

export default function PrimaryPage() {
  return (
    <>
      <h4>Home page</h4>
      <RegisterForm/>
      <Link href='/cabinet'>Cabinet</Link>
    </>
  )
}