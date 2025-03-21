import { FC } from "react";
import { Link } from "react-router-dom";

import { LoginForm } from "../widgets/loginForm/LoginForm";


export const LoginPage: FC = () => {
  return (
    <div className="pt-60 bg-gray-300 h-[100vh]">
      <LoginForm />
      <Link to={"/"}>перейти </Link>
    </div>
  );
};
