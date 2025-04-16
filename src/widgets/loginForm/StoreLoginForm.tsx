import axios from "axios";
import { toast } from "react-toastify";
const api = axios.create({ baseURL: "http://82.147.85.20:8080/api" });

api.interceptors.request.use((config) => {
  const isAuthRequest =
    config.url?.includes("/auth/register") ||
    config.url?.includes("/auth/login");

  if (!isAuthRequest) {
    const token = localStorage.getItem("jwtToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }

  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      logoutUser();
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export interface LoginFormData {
  username?: string;
  email: string;
  password: string;
}

export const loginUser = async (User: LoginFormData) => {
  try {
    const response = await api.post("/auth/login", User);
    const jwtToken = response.data.token;

    if (!jwtToken || typeof jwtToken !== "string") {
      throw new Error("Неверный формат токена или токен отсутствует");
    }

    localStorage.setItem("jwtToken", jwtToken);

    toast.success("Успешная авторизация!", {
      position: "top-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
    });

    return response.data;
  } catch (error) {
    handleError(error, "Ошибка при авторизации");
  }
};

export const registerUser = async (User: LoginFormData) => {
  try {
    const response = await api.post("/auth/register", User);
    const jwtToken = response.data.token;

    // Проверка токена
    if (!jwtToken || typeof jwtToken !== "string") {
      throw new Error("Неверный формат токена или токен отсутствует");
    }

    localStorage.setItem("jwtToken", jwtToken);

    toast.success("Успешная регистрация!", {
      position: "top-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
    });

    return response.data;
  } catch (error) {
    handleError(error, "Ошибка при регистрации");
  }
};

export const logoutUser = () => {
  localStorage.removeItem("jwtToken");

  toast.info("Вы успешно вышли из системы.", {
    position: "top-left",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  });
};

const handleError = (error: unknown, defaultMessage: string) => {
  if (axios.isAxiosError(error)) {
    console.error(defaultMessage, error.response?.data);
    toast.error(`Ошибка: ${error.response?.data.message || "Неизвестная ошибка"}`, {
      position: "top-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
    });
  } else {
    console.error("Неожиданная ошибка:", error);
    toast.error(defaultMessage, {
      position: "top-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
    });
  }
};

export { api };