import ProtectedRoute from 'components/ProtectedRoute';
import { USER_ROLES } from 'contexts/AuthContext';

const AdminProtectedRoute = (props) => {
    return (
        <ProtectedRoute
            {...props}
            allowedRoles={[USER_ROLES.ADMIN]}
            redirectTo="/admin/login"
        />
    );
};

export default AdminProtectedRoute;
