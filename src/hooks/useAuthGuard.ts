import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { isAuthenticated } from "@/services/authService";

export function useAuthGuard() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const isAuth = isAuthenticated();
    const isAuthRoute = location.pathname === "/login" || location.pathname === "/register";
    if (!isAuth && !isAuthRoute) {
      navigate("/login", { replace: true });
    }
    if (isAuth && isAuthRoute) {
      navigate("/", { replace: true });
    }
  }, [location, navigate]);
}
