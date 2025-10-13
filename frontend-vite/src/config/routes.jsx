import { USER_ROLES } from '../contexts/AuthContext';
// Import all components
import AdminLayout from '../components/AdminLayout';
import AdminLogin from '../components/AdminLogin';
import Registration from '../components/Registration';
import Dashboard from '../pages/Dashboard';
import ManageUsers from '../pages/ManageUsers';
import LandingPage from '../pages/LandingPage';
import Products from '../pages/Products';
import About from '../pages/About';
import OurTeam from '../pages/OurTeam';
import Contact from '../pages/Contact';
import LifeAtAgriFort from '../pages/lifeAtAgrifort';
import ManageDistributors from '../pages/ManageDistributors';

// Route definitions
export const ROUTES = {
  // Public routes
  PUBLIC: {
    HOME: '/',
    PRODUCTS: '/products',
    ABOUT: '/about',
    OUR_TEAM: '/ourteam',
    CONTACT: '/contact',
    LIFE_AT_AGRIFORT:'/lifeAtAgrifort',
    LOGIN: '/login',
    ADMIN_LOGIN: '/admin/login',
    REGISTER: '/register',
    ADMIN_REGISTER: '/admin/register'
  },
  
  // Admin routes
  ADMIN: {
    DASHBOARD: '/admin/dashboard',
    MANAGE_FARMERS: '/admin/manage-farmers',
    MANAGE_DISTRIBUTER: '/admin/manage-distributor',
    CREATE_FARMER: '/admin/create-farmer',
    ROOT: '/admin'
  },
  
  // Farmer routes
  FARMER: {
    DASHBOARD: '/farmer/dashboard',
  },
  
  // Distributor routes
  DISTRIBUTOR: {
    DASHBOARD: '/distributor/dashboard',
  },
  
  // Dealer routes
  DEALER: {
    DASHBOARD: '/dealer/dashboard',
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
      path: ROUTES.PUBLIC.LIFE_AT_AGRIFORT,
      exact: true,
      component: LifeAtAgriFort,
      title: 'Life_At_Agrifort'
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
      title: 'Admin Dashboard'
      // Remove allowedRoles from here - AdminProtectedRoute handles it
    },
    {
      path: ROUTES.ADMIN.MANAGE_FARMERS,
      exact: true,
      component: () => (
        <AdminLayout>
          <ManageUsers />
        </AdminLayout>
      ),
      title: 'Manage Farmers'
      // Remove allowedRoles from here
    },
    {
      path: ROUTES.ADMIN.CREATE_FARMER,
      exact: true,
      component: () => (
        <AdminLayout>
          <Registration />
        </AdminLayout>
      ),
      title: 'Create Farmer'
      // Remove allowedRoles from here
    },
    {
      path: ROUTES.ADMIN.MANAGE_DISTRIBUTER,
      exact: true,
      component: () => (
        <AdminLayout>
          <ManageDistributors />
        </AdminLayout>
      ),
      title: 'Create Farmer'
      // Remove allowedRoles from here
    },

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
      title: 'Farmer Dashboard'
      // Remove allowedRoles from here - FarmerProtectedRoute handles it
    },
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
      title: 'Distributor Dashboard'
      // Remove allowedRoles from here - DistributorProtectedRoute handles it
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
      title: 'Dealer Dashboard'
      // Remove allowedRoles from here - DealerProtectedRoute handles it
    }
  ]
};

// Redirect routes
export const REDIRECT_ROUTES = [
  { from: '/dashboard', to: '/admin/dashboard' },
  { from: ROUTES.ADMIN.ROOT, to: ROUTES.ADMIN.DASHBOARD }
];