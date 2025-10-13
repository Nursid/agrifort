import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { ROUTE_CONFIG, REDIRECT_ROUTES } from './config/routes';
import { 
    AdminProtectedRoute, 
    FarmerProtectedRoute, 
    DistributorProtectedRoute, 
    DealerProtectedRoute 
} from './components/routes';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <Routes>
        {/* Public Routes */}
        {ROUTE_CONFIG.public.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<route.component />}
          />
        ))}

        {/* Admin Protected Routes */}
        {ROUTE_CONFIG.admin.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<AdminProtectedRoute element={<route.component />} />}
          />
        ))}

        {/* Farmer Protected Routes */}
        {ROUTE_CONFIG.farmer.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<FarmerProtectedRoute element={<route.component />} />}
          />
        ))}

        {/* Distributor Protected Routes */}
        {ROUTE_CONFIG.distributor.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<DistributorProtectedRoute element={<route.component />} />}
          />
        ))}

        {/* Dealer Protected Routes */}
        {ROUTE_CONFIG.dealer.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<DealerProtectedRoute element={<route.component />} />}
          />
        ))}

        {/* Redirect Routes */}
        {REDIRECT_ROUTES.map((redirect) => (
          <Route
            key={redirect.from}
            path={redirect.from}
            element={<Navigate to={redirect.to} replace />}
          />
        ))}
      </Routes>
    </AuthProvider>
  );
}

export default App;
