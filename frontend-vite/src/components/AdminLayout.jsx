import Sidebar from '../components/Sidebar';

const AdminLayout = ({ children }) => {

    return (
        <>
            <Sidebar />
            <div className="md:ml-64">
                <div className="px-4">
                    {children}
                </div>
            </div>
        </>
    );
};

export default AdminLayout;
