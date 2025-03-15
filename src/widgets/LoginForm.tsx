import { FC, useState } from "react";

import { useForm } from "react-hook-form";
import axios from "axios";
import Button from "@mui/material/Button";
import '../app/index.css'
interface LoginFormData {
  username?: string;
  email: string;
  password: string;
}

const loginUser = async (User: LoginFormData) => {
  try {
    const response = await axios.post("/api/auth/login", User);
    return response.data;
  } catch (error) {
    console.error("Ошибка при авторизации:", error);
  }
};

const registerUser = async (User: LoginFormData) => {
  try {
    const response = await axios.post("/api/auth/register", User);
    return response.data;
  } catch (error) {
    console.error("Ошибка при регистрации:", error);
  }
};

export const LoginForm: FC = () => {
  const [isLogin, setIsLogin] = useState<boolean>(true);
  const { register, handleSubmit } = useForm<LoginFormData>();

  const onSubmit = async (User: LoginFormData) => {
    try {
      if (isLogin) {
        const result = await loginUser(User);
        console.log("Логин выполнен успешно:", result);
      } else {
        const result = await registerUser(User);
        console.log("Регистрация выполнена успешно:", result);
      }
    } catch (error) {
      console.error("Ошибка:");
    }
  };

  return (
    <div>
      <div className="flex justify-around">
        <Button
          variant="text"
          onClick={() => setIsLogin(true)}
          sx={{
            width: 150,
            fontSize:20,
            color:"gray",
            margin:1,
            textDecoration: "none",
            borderBottom: "none",
            "&:hover": {
              color:"green",
              borderBottom: "1px solid currentColor", 
            },
          }}
        >
          LOG IN
        </Button>
        <Button
          variant="text"
          onClick={() => setIsLogin(false)}
          sx={{
            textDecoration: "none",
            width: 150, 
            color:"gray",
            fontSize:20,
            margin:1,
            borderBottom: "none",
            "&:hover": {
              color:"green",
              borderBottom: "1px solid currentColor", 
            },
          }}
        >
          SIGN UP
        </Button>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <section>
          <input className="border rounded-sm p-2 m-2 pr-17 text-white" {...register("email")} type="email" placeholder="Email" />
          <input className="border rounded-sm p-2 m-2 pr-17 text-white"
            {...register("password")}
            type="password"
            placeholder="Password"
          />
        </section>
        <button className=" text-white p-2 w-65 rounded-sm bg-green-500 font-bold p-1 m-2 text-[20px]" type="submit">{isLogin ? "Login" : "Register"}</button>
      </form>
    </div>
  );
};
