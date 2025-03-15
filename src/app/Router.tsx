import { FC } from "react"
import { Routes,Route } from "react-router-dom"
import { LoginPage } from "../pages/LoginPage"

export const Router:FC = () => {
    return(
        <Routes>
            <Route path="/login" element={<LoginPage />}></Route>
        </Routes>
    )
}