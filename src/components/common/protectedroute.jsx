import { useAuth } from "../../context/auth.context";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, onlyBiz = false }) => {
  const { user } = useAuth();
  if (!user || (onlyBiz && !user.biz)) {
    return <Navigate to={"/signIn"} />;
  }
  return children;
};
export default ProtectedRoute;
