import { ROUTES } from 'config/routes';

// Utility functions for route navigation
export const getRouteByRole = (role, page = 'dashboard') => {
    const roleRoutes = {
        admin: ROUTES.ADMIN,
        farmer: ROUTES.FARMER,
        distributor: ROUTES.DISTRIBUTOR,
        dealer: ROUTES.DEALER
    };

    const routes = roleRoutes[role];
    if (!routes) {
        return ROUTES.PUBLIC.HOME;
    }

    return routes[page.toUpperCase()] || routes.DASHBOARD;
};

// Get dashboard route based on user role
export const getDashboardRoute = (role) => {
    return getRouteByRole(role, 'dashboard');
};

// Check if a route is public
export const isPublicRoute = (path) => {
    const publicPaths = Object.values(ROUTES.PUBLIC);
    return publicPaths.includes(path);
};

// Check if a route is protected
export const isProtectedRoute = (path) => {
    const allProtectedPaths = [
        ...Object.values(ROUTES.ADMIN),
        ...Object.values(ROUTES.FARMER),
        ...Object.values(ROUTES.DISTRIBUTOR),
        ...Object.values(ROUTES.DEALER)
    ];
    return allProtectedPaths.includes(path);
};

// Get role from route path
export const getRoleFromPath = (path) => {
    if (path.startsWith('/admin/')) return 'admin';
    if (path.startsWith('/farmer/')) return 'farmer';
    if (path.startsWith('/distributor/')) return 'distributor';
    if (path.startsWith('/dealer/')) return 'dealer';
    return null;
};
