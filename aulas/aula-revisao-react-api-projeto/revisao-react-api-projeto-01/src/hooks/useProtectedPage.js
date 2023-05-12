import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { goToHome } from "../routes/coordinator";

const useProtectedPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    if (!token) {
      goToHome(navigate);
    }
  }, [navigate]);
};

export default useProtectedPage;