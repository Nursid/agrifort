import Sidebar from 'components/Sidebar';

const AdminLayout = ({ children }) => {

    return (
        <>
            <Sidebar />
            <div className="md:ml-64">
                {/* Logout button in top right */}
                {/* <div className="flex justify-end p-4">
                    <Button
                        color="red"
                        buttonType="filled"
                        size="sm"
                        ripple="light"
                        onClick={handleLogout}
                    >
                        Logout
                    </Button>
                </div> */}
                <div className="px-4">
                    {children}
                </div>
            </div>
        </>
    );
};

export default AdminLayout;
