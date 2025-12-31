import ProtectedRoute from "../../components/ProtectedRoute";
import { USER_ROLES } from "contexts/AuthContext";

const DistributorProtectedRoute = ({ children }) => {
  return (
    <ProtectedRoute
      allowedRoles={[USER_ROLES.DISTRIBUTOR]}
      redirectTo="/login"
    >
      {children}
    </ProtectedRoute>
  );
};

export default DistributorProtectedRoute;
