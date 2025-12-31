import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const ProtectedRoute = ({
  children,
  allowedRoles,
  redirectTo = "/login",
}) => {
  const {
    isAuthenticated,
    isLoading,
    userRole,
    hasAnyRole,
  } = useAuth();

  // ⏳ Loading State
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  // 🔒 Not Authenticated
  if (!isAuthenticated) {
    return <Navigate to={redirectTo} replace />;
  }

  // 🚫 Role Not Allowed
  if (allowedRoles && !hasAnyRole(allowedRoles)) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center p-8 bg-white rounded-lg shadow-md">
          <div className="text-red-500 text-6xl mb-4">🚫</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Access Denied
          </h2>
          <p className="text-gray-600 mb-4">
            You don't have permission to access this page.
          </p>
          <p className="text-sm text-gray-500">
            Current role:{" "}
            <span className="font-medium">{userRole}</span>
          </p>
          <p className="text-sm text-gray-500">
            Required roles:{" "}
            <span className="font-medium">
              {allowedRoles.join(", ")}
            </span>
          </p>
        </div>
      </div>
    );
  }

  // ✅ Allowed → render page
  return children;
};

export default ProtectedRoute;
