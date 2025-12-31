import ProtectedRoute from "components/ProtectedRoute";
import { USER_ROLES } from "contexts/AuthContext";

const FarmerProtectedRoute = ({ children }) => {
  return (
    <ProtectedRoute
      allowedRoles={[USER_ROLES.FARMER]}
      redirectTo="/login"
    >
      {children}
    </ProtectedRoute>
  );
};

export default FarmerProtectedRoute;
