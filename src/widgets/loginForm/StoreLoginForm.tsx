import axios from "axios";
import {ToastContainer,Bounce } from "react-toastify";
export interface LoginFormData {
  username?: string;
  email: string;
  password: string;
}

export const loginUser = async (User: LoginFormData) => {
  try {
    const response = await axios.post("/api/auth/login", User);
    return response.data;
  } catch (error) {
    console.error("Ошибка при авторизации:", error);
  }
};

export const registerUser = async (User: LoginFormData) => {
  try {
    const response = await axios.post("/api/auth/register", User);
    return response.data;
  } catch (error) {
    console.error("Ошибка при регистрации:", error);
  }
};
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
/>;
