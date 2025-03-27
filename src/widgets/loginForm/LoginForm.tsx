import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../app/index.css";
import { ToastContainer, Bounce } from "react-toastify";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { Tabs, Tab } from "@mui/material";
import { LoginFormData } from "./StoreLoginForm";
import { loginUser, registerUser } from "./StoreLoginForm";

export const LoginForm: FC = () => {
  const [isLogin, setIsLogin] = useState<boolean>(true);
  const { register, handleSubmit } = useForm<LoginFormData>();
  const [value, setValue] = useState(0);
  const navigate = useNavigate();

  const handleChange = (_event: any, newValue: number) => {
    setValue(newValue);
  };

  const onSubmit = async (User: LoginFormData) => {
    try {
      if (isLogin) {
        toast.success("Успешно залогинен");
        await loginUser(User);
        loginUser(User).then(() => navigate("/"));
      } else {
        await registerUser(User);
        toast.success("Регистрация выполнена успешно");
      }
    } catch (error) {
      toast.error("Ошибка");
    }
  };

  return (
    <div className="border-5-800 border rounded-lg p-3 bg-gray-900 h-[300px] w-[300px] mx-auto">
      <div className="flex justify-around">
        <ToastContainer
          position="top-left"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          transition={Bounce}
        />
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab
            style={{ color: "whitesmoke" }}
            onClick={() => setIsLogin(true)}
            label="Login"
          />
          <Tab
            style={{ color: "whitesmoke" }}
            onClick={() => setIsLogin(false)}
            label="Register"
          />
        </Tabs>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <section>
          <input
            className="border rounded-sm p-2 m-2 pr-17 text-white"
            {...register("email")}
            type="email"
            placeholder="Email"
          />
          <input
            className="border rounded-sm p-2 m-2 pr-17 text-white"
            {...register("password")}
            type="password"
            placeholder="Password"
          />
        </section>
        <button
          className=" cursor-pointer hover:scale-105 transition duration-300 text-white p-2 w-65 rounded-sm bg-green-500 font-bold p-1 m-2 text-[20px]"
          type="submit"
        >
          {isLogin ? "Login" : "Register"}
        </button>
        <button
          className="cursor-pointer hover:scale-105 transition duration-300 text-white p-2 rounded-sm  p-1 m-2"
          type="button"
        >
          forgot password?
        </button>
      </form>
    </div>
  );
};
