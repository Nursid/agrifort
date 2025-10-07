import { useAuth } from 'contexts/AuthContext';
import Sidebar from 'components/Sidebar';
import Footer from 'components/Footer';
import Button from '@material-tailwind/react/Button';

const AdminLayout = ({ children }) => {
    const { logout } = useAuth();

    const handleLogout = () => {
        logout();
        window.location.href = '/';
    };

    return (
        <>
            <Sidebar />
            <div className="md:ml-64">
                {/* Logout button in top right */}
                <div className="flex justify-end p-4">
                    <Button
                        color="red"
                        buttonType="filled"
                        size="sm"
                        ripple="light"
                        onClick={handleLogout}
                    >
                        Logout
                    </Button>
                </div>
                <div className="px-4">
                    {children}
                </div>
                {/* <Footer /> */}
            </div>
        </>
    );
};

export default AdminLayout;
