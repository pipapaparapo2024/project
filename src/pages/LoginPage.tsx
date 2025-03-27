import { FC } from "react";

import { LoginForm } from "../widgets/loginForm/LoginForm";


export const LoginPage: FC = () => {
  return (
    <div className="pt-60 bg-gray-300 h-[100vh]">
      <LoginForm />
    </div>
  );
};
