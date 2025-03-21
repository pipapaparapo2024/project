import { FC } from "react";
import { Routes, Route } from "react-router-dom";
import { LoginPage } from "../pages/LoginPage";
import { Home } from "../pages/Home";

export const Router: FC = () => {
  return (
    <div>
      <Routes>
        <Route  path="/login" element={<LoginPage />}></Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </div>
  );
};
