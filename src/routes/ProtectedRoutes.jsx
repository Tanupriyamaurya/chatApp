import { Navigate } from "react-router-dom";
import { isLoggedIn } from "../utils/authUtils";
import { toast } from "react-toastify";
import { useEffect, useRef } from "react";

const ProtectedRoute = ({ children }) => {
  const toastShown = useRef(false);

  useEffect(() => {
    if (!isLoggedIn() && !toastShown.current) {
      toast.warning("Please login to continue", {
        position: "top-center",
      });
      toastShown.current = true;
    }
  }, []);

  if (!isLoggedIn()) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
