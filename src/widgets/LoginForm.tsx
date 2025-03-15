import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios"; 

interface LoginFormData {
  username?:string;
  email: string;
  password: string;
}

const loginUser = async (User:LoginFormData) => {
  try {
    const response = await axios.post("/api/auth/login", User);
    return response.data;
  } catch (error) {
    console.error("Ошибка при авторизации:", error);
    }
  }

const registerUser = async (User:LoginFormData) => {
    try {
      const response = await axios.post("/api/auth/register", User);
      return response.data;
    } catch (error) {
      console.error("Ошибка при регистрации:", error);
    }
  };

export const LoginForm: FC = () => {
  const [isLogin, setIsLogin] = useyState<boolean>(true);
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
      <div>
        <button onClick={() => setIsLogin(true)}>LOG IN</button>
        <button onClick={() => setIsLogin(false)}>SIGN UP</button>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("email")} type="email" placeholder="Email" />
        <input {...register("password")} type="password" placeholder="Password" />
        <button type="submit">{isLogin ? "Login" : "Register"}</button>
      </form>
    </div>
  );
};