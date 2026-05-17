import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ProtectedRoutes({ comp }) {
  const navigate = useNavigate();
  let user = localStorage.getItem("user");
  user = JSON.parse(user);

  useEffect(() => {
    if (
      user.email !== "suman987@gmail.com" ||
      user.password !== "suman12345678"
    ) {
      navigate("/login", { replace: true });
    }
  }, [user, navigate]);

  if (!user) {
    return null; // or loading spinner
  }

  return comp;
}

export default ProtectedRoutes;


// suman987@gmail.com
// suman12345678