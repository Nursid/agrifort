import ProtectedRoute from '../../components/ProtectedRoute';
import { USER_ROLES } from '../../contexts/AuthContext';

const MultiRoleProtectedRoute = ({ allowedRoles, ...props }) => {
    return (
        <ProtectedRoute
            {...props}
            allowedRoles={allowedRoles}
            redirectTo="/login"
        />
    );
};

export default MultiRoleProtectedRoute;
