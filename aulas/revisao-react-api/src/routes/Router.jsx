import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Header } from "../components/header/Header"
import {
    AddRecipePage,
    DetailsPage,
    FeedRecipesPage,
    LoginPage,
    RegisterPage
} from '../pages'

export const Router = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={< RegisterPage />} />
                <Route path="/feed" element={<FeedRecipesPage />} />
                <Route path="/add-recipe" element={<AddRecipePage />} />
                <Route path="/recipe/:id" element={<DetailsPage />} />
            </Routes>
        </BrowserRouter>
    )
}