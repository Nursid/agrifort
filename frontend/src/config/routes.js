import { USER_ROLES } from 'contexts/AuthContext';

// Import all components
import AdminLayout from 'components/AdminLayout';
import AdminLogin from 'components/AdminLogin';
import Registration from 'components/Registration';
import Dashboard from 'pages/Dashboard';
import Settings from 'pages/Settings';
import Tables from 'pages/Tables';
import Maps from 'pages/Maps';
import ManageUsers from 'pages/ManageUsers';
import LandingPage from 'pages/LandingPage';
import Products from 'pages/Products';
import About from 'pages/About';
import OurTeam from 'pages/OurTeam';
import Contact from 'pages/Contact';
import ManageDistributer from 'pages/ManageDistbuter';

// Route definitions
export const ROUTES = {
  // Public routes
  PUBLIC: {
    HOME: '/',
    PRODUCTS: '/products',
    ABOUT: '/about',
    OUR_TEAM: '/ourteam',
    CONTACT: '/contact',
    LOGIN: '/login',
    ADMIN_LOGIN: '/admin/login',
    REGISTER: '/register',
    ADMIN_REGISTER: '/admin/register'
  },
  
  // Admin routes
  ADMIN: {
    DASHBOARD: '/admin/dashboard',
    SETTINGS: '/admin/settings',
    TABLES: '/admin/tables',
    MAPS: '/admin/maps',
    MANAGE_FARMERS: '/admin/manage-farmers',
    MANAGE_DISTRIBUTER: '/admin/manage-distributor',
    CREATE_FARMER: '/admin/create-farmer',
    ROOT: '/admin'
  },
  
  // Farmer routes
  FARMER: {
    DASHBOARD: '/farmer/dashboard',
    SETTINGS: '/farmer/settings',
    TABLES: '/farmer/tables',
    MAPS: '/farmer/maps'
  },
  
  // Distributor routes
  DISTRIBUTOR: {
    DASHBOARD: '/distributor/dashboard',
    SETTINGS: '/distributor/settings',
    TABLES: '/distributor/tables',
    MAPS: '/distributor/maps'
  },
  
  // Dealer routes
  DEALER: {
    DASHBOARD: '/dealer/dashboard',
    SETTINGS: '/dealer/settings',
    TABLES: '/dealer/tables',
    MAPS: '/dealer/maps'
  }
};

// Route configuration for different user roles
export const ROUTE_CONFIG = {
  // Public routes (no authentication required)
  public: [
    {
      path: ROUTES.PUBLIC.HOME,
      exact: true,
      component: LandingPage,
      title: 'Home'
    },
    {
      path: ROUTES.PUBLIC.PRODUCTS,
      exact: true,
      component: Products,
      title: 'Products'
    },
    {
      path: ROUTES.PUBLIC.ABOUT,
      exact: true,
      component: About,
      title: 'About Us'
    },
    {
      path: ROUTES.PUBLIC.OUR_TEAM,
      exact: true,
      component: OurTeam,
      title: 'Our Team'
    },
    {
      path: ROUTES.PUBLIC.CONTACT,
      exact: true,
      component: Contact,
      title: 'Contact'
    },
    {
      path: ROUTES.PUBLIC.LOGIN,
      exact: true,
      component: AdminLogin,
      title: 'Login'
    },
    {
      path: ROUTES.PUBLIC.ADMIN_LOGIN,
      exact: true,
      component: AdminLogin,
      title: 'Admin Login'
    },
    {
      path: ROUTES.PUBLIC.REGISTER,
      exact: true,
      component: Registration,
      title: 'Register'
    },
    {
      path: ROUTES.PUBLIC.ADMIN_REGISTER,
      exact: true,
      component: Registration,
      title: 'Admin Register'
    },
  ],

  // Admin protected routes
  admin: [
    {
      path: ROUTES.ADMIN.DASHBOARD,
      exact: true,
      component: () => (
        <AdminLayout>
          <Dashboard />
        </AdminLayout>
      ),
      title: 'Admin Dashboard',
      allowedRoles: [USER_ROLES.ADMIN]
    },
    {
      path: ROUTES.ADMIN.SETTINGS,
      exact: true,
      component: () => (
        <AdminLayout>
          <Settings />
        </AdminLayout>
      ),
      title: 'Admin Settings',
      allowedRoles: [USER_ROLES.ADMIN]
    },
    {
      path: ROUTES.ADMIN.MANAGE_DISTRIBUTER,
      exact: true,
      component: () => (
        <AdminLayout>
          <ManageDistributer />
        </AdminLayout>
      ),
      title: 'Manage Distributors',
      allowedRoles: [USER_ROLES.ADMIN]
    },
    {
      path: ROUTES.ADMIN.MAPS,
      exact: true,
      component: () => (
        <AdminLayout>
          <Maps />
        </AdminLayout>
      ),
      title: 'Admin Maps',
      allowedRoles: [USER_ROLES.ADMIN]
    },
    {
      path: ROUTES.ADMIN.MANAGE_USERS,
      exact: true,
      component: () => (
        <AdminLayout>
          <ManageUsers />
        </AdminLayout>
      ),
      title: 'Manage Farmers',
      allowedRoles: [USER_ROLES.ADMIN]
    },
    {
      path: ROUTES.ADMIN.CREATE_FARMER,
      exact: true,
      component: () => (
        <AdminLayout>
          <Registration />
        </AdminLayout>
      ),
      title: 'Create Farmer',
      allowedRoles: [USER_ROLES.ADMIN]
    }
  ],

  // Farmer protected routes
  farmer: [
    {
      path: ROUTES.FARMER.DASHBOARD,
      exact: true,
      component: () => (
        <AdminLayout>
          <Dashboard />
        </AdminLayout>
      ),
      title: 'Farmer Dashboard',
      allowedRoles: [USER_ROLES.FARMER]
    },
    {
      path: ROUTES.FARMER.SETTINGS,
      exact: true,
      component: () => (
        <AdminLayout>
          <Settings />
        </AdminLayout>
      ),
      title: 'Farmer Settings',
      allowedRoles: [USER_ROLES.FARMER]
    },
    {
      path: ROUTES.FARMER.TABLES,
      exact: true,
      component: () => (
        <AdminLayout>
          <Tables />
        </AdminLayout>
      ),
      title: 'Farmer Tables',
      allowedRoles: [USER_ROLES.FARMER]
    },
    {
      path: ROUTES.FARMER.MAPS,
      exact: true,
      component: () => (
        <AdminLayout>
          <Maps />
        </AdminLayout>
      ),
      title: 'Farmer Maps',
      allowedRoles: [USER_ROLES.FARMER]
    }
  ],

  // Distributor protected routes
  distributor: [
    {
      path: ROUTES.DISTRIBUTOR.DASHBOARD,
      exact: true,
      component: () => (
        <AdminLayout>
          <Dashboard />
        </AdminLayout>
      ),
      title: 'Distributor Dashboard',
      allowedRoles: [USER_ROLES.DISTRIBUTOR]
    },
    {
      path: ROUTES.DISTRIBUTOR.SETTINGS,
      exact: true,
      component: () => (
        <AdminLayout>
          <Settings />
        </AdminLayout>
      ),
      title: 'Distributor Settings',
      allowedRoles: [USER_ROLES.DISTRIBUTOR]
    },
    {
      path: ROUTES.DISTRIBUTOR.TABLES,
      exact: true,
      component: () => (
        <AdminLayout>
          <Tables />
        </AdminLayout>
      ),
      title: 'Distributor Tables',
      allowedRoles: [USER_ROLES.DISTRIBUTOR]
    },
    {
      path: ROUTES.DISTRIBUTOR.MAPS,
      exact: true,
      component: () => (
        <AdminLayout>
          <Maps />
        </AdminLayout>
      ),
      title: 'Distributor Maps',
      allowedRoles: [USER_ROLES.DISTRIBUTOR]
    }
  ],

  // Dealer protected routes
  dealer: [
    {
      path: ROUTES.DEALER.DASHBOARD,
      exact: true,
      component: () => (
        <AdminLayout>
          <Dashboard />
        </AdminLayout>
      ),
      title: 'Dealer Dashboard',
      allowedRoles: [USER_ROLES.DEALER]
    },
    {
      path: ROUTES.DEALER.SETTINGS,
      exact: true,
      component: () => (
        <AdminLayout>
          <Settings />
        </AdminLayout>
      ),
      title: 'Dealer Settings',
      allowedRoles: [USER_ROLES.DEALER]
    },
    {
      path: ROUTES.DEALER.TABLES,
      exact: true,
      component: () => (
        <AdminLayout>
          <Tables />
        </AdminLayout>
      ),
      title: 'Dealer Tables',
      allowedRoles: [USER_ROLES.DEALER]
    },
    {
      path: ROUTES.DEALER.MAPS,
      exact: true,
      component: () => (
        <AdminLayout>
          <Maps />
        </AdminLayout>
      ),
      title: 'Dealer Maps',
      allowedRoles: [USER_ROLES.DEALER]
    }
  ]
};

// Redirect routes
export const REDIRECT_ROUTES = [
  { from: '/dashboard', to: '/admin/dashboard' },
  { from: '/settings', to: '/admin/settings' },
  { from: '/tables', to: '/admin/tables' },
  { from: '/maps', to: '/admin/maps' },
  { from: ROUTES.ADMIN.ROOT, to: ROUTES.ADMIN.DASHBOARD }
];
