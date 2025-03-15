import { FC } from "react";
import { LoginForm } from "../widgets/LoginForm";

export const LoginPage: FC = () => {
  return (
    <div className="border-5 border rounded-lg p-1 bg-gray-900 h-[300px] w-[300px]">
      <LoginForm />
    </div>
  );
};
