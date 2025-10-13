import ProtectedRoute from '../../components/ProtectedRoute';
import { USER_ROLES } from '../../contexts/AuthContext';

const DistributorProtectedRoute = (props) => {
    return (
        <ProtectedRoute
            {...props}
            allowedRoles={[USER_ROLES.DISTRIBUTOR]}
            redirectTo="/login"
        />
    );
};

export default DistributorProtectedRoute;
