import ProtectedRoute from "components/ProtectedRoute";

const MultiRoleProtectedRoute = ({ allowedRoles, children }) => {
  return (
    <ProtectedRoute
      allowedRoles={allowedRoles}
      redirectTo="/login"
    >
      {children}
    </ProtectedRoute>
  );
};

export default MultiRoleProtectedRoute;
