import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserProvider";
function ProtectedRoutes({ comp }) {
  const navigate = useNavigate();
  const info = useContext(UserContext);
  // console.log(info.user?.data);
  const role = info.user?.data?.role;
  useEffect(() => {
    if (!info.loading && role !== "admin") {
      navigate("/login", { replace: true });
    }
  }, [info?.loading, role, navigate]);

  if (info.loading) {
    return (
      <div className="text-white   bg-black font-bold  text-4xl p-10">
        Loading...
      </div>
    );
  } else {
    return comp;
  }
}

export default ProtectedRoutes;
