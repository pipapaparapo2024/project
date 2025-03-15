import { FC } from "react";
import { Routes, Route } from "react-router-dom";
import { LoginPage } from "../pages/LoginPage";

export const Router: FC = () => {
  return (
    <div className="h-[100vh] w-[100vw] pt-50 pl-150 ">
      <Routes>
        <Route path="/login" element={<LoginPage />}></Route>
      </Routes>
    </div>
  );
};
