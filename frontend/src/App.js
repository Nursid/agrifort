import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { ROUTE_CONFIG, REDIRECT_ROUTES } from "./config/routes";

import {
  AdminProtectedRoute,
  FarmerProtectedRoute,
  DistributorProtectedRoute,
  DealerProtectedRoute,
} from "./components/routes";

import LandingPage from "./pages/LandingPage";


function App() {
  return (
    <AuthProvider>
    <Routes>
      <Route path="/" element={<LandingPage   />} />

 
        {ROUTE_CONFIG.public.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={React.createElement(route.component)}
          />
        ))}

        {ROUTE_CONFIG.admin.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={
              <AdminProtectedRoute>
                {route.component()}
              </AdminProtectedRoute>
            }
          />
        ))}

        {ROUTE_CONFIG.farmer.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={
              <FarmerProtectedRoute>
                {route.component()}
              </FarmerProtectedRoute>
            }
          />
        ))}

        {ROUTE_CONFIG.distributor.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={
              <DistributorProtectedRoute>
                {route.component()}
              </DistributorProtectedRoute>
            }
          />
        ))}

        {ROUTE_CONFIG.dealer.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={
              <DealerProtectedRoute>
                {route.component()}
              </DealerProtectedRoute>
            }
          />
        ))}

 
        {REDIRECT_ROUTES.map((redirect) => (
          <Route
            key={redirect.from}
            path={redirect.from}
            element={<Navigate to={redirect.to} replace />}
          />
        ))} 


        <Route path="*" element={<Navigate to="/" replace />} />

      </Routes>
    </AuthProvider>
  );
}

export default App;
