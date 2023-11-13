import LoginForm from "@/components/LoginForm/LoginForm";
import RegisterForm from "@/components/RegisterForm/RegisterForm";
import Link from "next/link";

export default function PrimaryPage() {
  return (
    <>
      <h4>Home page</h4>
      <RegisterForm />
      <LoginForm />
      <Link href='/cabinet'>Cabinet</Link>
    </>
  )
}