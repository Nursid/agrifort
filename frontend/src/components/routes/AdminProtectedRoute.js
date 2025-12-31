import ProtectedRoute from 'components/ProtectedRoute';
import { USER_ROLES } from 'contexts/AuthContext';

const AdminProtectedRoute = ({ children }) => (
    <ProtectedRoute
      allowedRoles={[USER_ROLES.ADMIN]}
      redirectTo="/admin/login"
    >
      {children}
    </ProtectedRoute>
  );
  

export default AdminProtectedRoute;
