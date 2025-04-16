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
        <Route path="/Auth" element={<LoginPage />}></Route>
        <Route path="/Space" element={<SpacePage />}></Route>
        <Route path="/Weardrop" element={<WeardropPage />}></Route>
        <Route path="/Type" element={<TypePage />}></Route>
      </Routes>
    </div>
  );
};

