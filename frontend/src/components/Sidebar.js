import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth, USER_ROLES } from 'contexts/AuthContext';
import AdminNavbar from './AdminNavbar';
import Icon from '@material-tailwind/react/Icon';
export default function Sidebar() {
    const [showSidebar, setShowSidebar] = useState('-left-64');
    const { userRole, userInfo } = useAuth();

    const getNavigationItems = () => {
        const baseItems = [
            {
                path: `/${userRole}/dashboard`,
                icon: 'dashboard',
                label: 'Dashboard',
                roles: [USER_ROLES.ADMIN, USER_ROLES.FARMER, USER_ROLES.DISTRIBUTOR, USER_ROLES.DEALER]
            }
        ];

        const adminItems = [
            {
                path: '/admin/manage-users',
                icon: 'people',
                label: 'Manage Users',
                roles: [USER_ROLES.ADMIN]
            },
            {
                path: '/admin/settings',
                icon: 'settings',
                label: 'Settings',
                roles: [USER_ROLES.ADMIN]
            },
            {
                path: '/admin/tables',
                icon: 'toc',
                label: 'Tables',
                roles: [USER_ROLES.ADMIN]
            },
            {
                path: '/admin/maps',
                icon: 'map',
                label: 'Maps',
                roles: [USER_ROLES.ADMIN]
            }
        ];

        const farmerItems = [
            {
                path: '/farmer/crops',
                icon: 'nature',
                label: 'Crops',
                roles: [USER_ROLES.FARMER]
            },
            {
                path: '/farmer/inventory',
                icon: 'inventory',
                label: 'Inventory',
                roles: [USER_ROLES.FARMER]
            }
        ];

        const distributorItems = [
            {
                path: '/distributor/orders',
                icon: 'shopping_cart',
                label: 'Orders',
                roles: [USER_ROLES.DISTRIBUTOR]
            },
            {
                path: '/distributor/logistics',
                icon: 'local_shipping',
                label: 'Logistics',
                roles: [USER_ROLES.DISTRIBUTOR]
            }
        ];

        const dealerItems = [
            {
                path: '/dealer/sales',
                icon: 'point_of_sale',
                label: 'Sales',
                roles: [USER_ROLES.DEALER]
            },
            {
                path: '/dealer/customers',
                icon: 'people',
                label: 'Customers',
                roles: [USER_ROLES.DEALER]
            }
        ];

        let allItems = [...baseItems];
        
        if (userRole === USER_ROLES.ADMIN) {
            allItems = [...allItems, ...adminItems];
        } else if (userRole === USER_ROLES.FARMER) {
            allItems = [...allItems, ...farmerItems];
        } else if (userRole === USER_ROLES.DISTRIBUTOR) {
            allItems = [...allItems, ...distributorItems];
        } else if (userRole === USER_ROLES.DEALER) {
            allItems = [...allItems, ...dealerItems];
        }

        return allItems.filter(item => item.roles.includes(userRole));
    };

    const getRoleDisplayName = () => {
        const roleNames = {
            [USER_ROLES.ADMIN]: 'Admin',
            [USER_ROLES.FARMER]: 'Farmer',
            [USER_ROLES.DISTRIBUTOR]: 'Distributor',
            [USER_ROLES.DEALER]: 'Dealer'
        };
        return roleNames[userRole] || 'User';
    };

    const navigationItems = getNavigationItems();

    return (
        <>
            <AdminNavbar
                showSidebar={showSidebar}
                setShowSidebar={setShowSidebar}
            />
            <div
                className={`h-screen fixed top-0 md:left-0 ${showSidebar} overflow-y-auto flex-row flex-nowrap overflow-hidden shadow-xl bg-white w-64 z-10 py-4 px-6 transition-all duration-300`}
            >
                <div className="flex-col items-stretch min-h-full flex-nowrap px-0 relative">
                    <p color="gray" className="font-size-2xl font-bold">Agrifort Technologies</p>
                    
                    {/* User Role Badge */}
                    <div className="mt-2 mb-4">
                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                            <div className="text-xs text-blue-600 font-medium uppercase tracking-wide">
                                Current Role
                            </div>
                            <div className="text-sm font-semibold text-blue-800 mt-1">
                                {getRoleDisplayName()}
                            </div>
                            {userInfo?.username && (
                                <div className="text-xs text-blue-600 mt-1">
                                    {userInfo.username}
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="flex flex-col">
                        <hr className="my-4 min-w-full" />
                        <ul className="flex-col min-w-full flex list-none">
                            {navigationItems.map((item, index) => (
                                <li key={index} className="rounded-lg mb-2">
                                    <NavLink
                                        to={item.path}
                                        className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                                        activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                                    >
                                        <Icon name={item.icon} size="2xl" />
                                        {item.label}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}
