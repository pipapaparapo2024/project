import { FC, useState } from "react";
import "../../app/index.css";


import { useForm } from "react-hook-form";
import { Tabs, Tab } from '@mui/material';
import { LoginFormData } from "../../services/store";
import {loginUser,registerUser} from "../../services/store";


export const LoginForm: FC = () => {
  const [isLogin, setIsLogin] = useState<boolean>(true);
  const { register, handleSubmit } = useForm<LoginFormData>();
  const [value,setValue]=useState(0)

  const handleChange = (_event: any, newValue: number) => {
    setValue(newValue);
  };


  const a11yProps = (index:number) => ({
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  });

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
    <div className="border-5-800 border rounded-lg p-3 bg-gray-900 h-[300px] w-[300px] mx-auto">
      <div className="flex justify-around">
        <Tabs
       
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab style={{color:"whitesmoke"}} onClick={() => setIsLogin(true)} label="Login" {...a11yProps(0)} />
          <Tab style={{color:"whitesmoke"}} onClick={() => setIsLogin(false)} label="Register" {...a11yProps(1)} />
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
        <button className="cursor-pointer hover:scale-105 transition duration-300 text-white p-2 rounded-sm  p-1 m-2" type="button">forgot password?</button>
      </form>
    </div>
  );
};
