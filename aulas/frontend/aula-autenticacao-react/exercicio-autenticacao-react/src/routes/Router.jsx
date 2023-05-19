import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import FeedPage from "../pages/FeedPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/feed"} element={<FeedPage />} />
        <Route path={"/signup"} element={<SignUpPage />} />
        <Route path={"/"} element={<LoginPage />} />
        <Route path={"*"} element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
