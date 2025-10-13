import ProtectedRoute from '../../components/ProtectedRoute';
import { USER_ROLES } from '../../contexts/AuthContext';

const FarmerProtectedRoute = (props) => {
    return (
        <ProtectedRoute
            {...props}
            allowedRoles={[USER_ROLES.FARMER]}
            redirectTo="/login"
        />
    );
};

export default FarmerProtectedRoute;
