import { FC } from "react";
import { Routes, Route } from "react-router-dom";
import { LoginPage } from "../pages/LoginPage";
import { HomePage } from "../pages/HomePage";
import {TypePage} from '../pages/navPages/TypePage'
import {WeardropPage} from '../pages/navPages/WeardropPage'
import {SpacePage} from '../pages/navPages/SpacePage'
export const Router: FC = () => {

  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/LoginPage" element={<LoginPage />}></Route>
        <Route path="/SpacePage" element={<SpacePage />}></Route>
        <Route path="/WeardropPage" element={<WeardropPage />}></Route>
        <Route path="/TypePage" element={<TypePage />}></Route>
      </Routes>
    </div>
  );
};

