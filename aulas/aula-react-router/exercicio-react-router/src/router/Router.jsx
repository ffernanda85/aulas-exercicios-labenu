import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import HomePage from "../pages/HomePage";
import ProductsPage from "../pages/ProductsPage";
import ProfilePage from "../pages/ProfilePage";



export function Router() {
    return (

        <BrowserRouter>

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/product/:id" element={<ProductsPage />} />
                <Route path="*" element={ <ErrorPage/> } />
            </Routes>

        </BrowserRouter>


    )
}