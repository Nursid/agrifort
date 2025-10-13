import ProtectedRoute from '../../components/ProtectedRoute';
import { USER_ROLES } from '../../contexts/AuthContext';

const DealerProtectedRoute = (props) => {
    return (
        <ProtectedRoute
            {...props}
            allowedRoles={[USER_ROLES.DEALER]}
            redirectTo="/login"
        />
    );
};

export default DealerProtectedRoute;
