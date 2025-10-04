import { Switch, Route, Redirect } from 'react-router-dom';
import { AuthProvider } from 'contexts/AuthContext';
import { ROUTE_CONFIG, REDIRECT_ROUTES } from 'config/routes';
import { 
    AdminProtectedRoute, 
    FarmerProtectedRoute, 
    DistributorProtectedRoute, 
    DealerProtectedRoute 
} from 'components/routes';
import 'assets/styles/tailwind.css';

function App() {
    return (
        <AuthProvider>
            <Switch>
                {/* Public Routes */}
                {ROUTE_CONFIG.public.map((route) => (
                    <Route
                        key={route.path}
                        exact={route.exact}
                        path={route.path}
                        component={route.component}
                    />
                ))}
                
                {/* Admin Protected Routes */}
                {ROUTE_CONFIG.admin.map((route) => (
                    <AdminProtectedRoute
                        key={route.path}
                        exact={route.exact}
                        path={route.path}
                        component={route.component}
                    />
                ))}
                
                {/* Farmer Protected Routes */}
                {ROUTE_CONFIG.farmer.map((route) => (
                    <FarmerProtectedRoute
                        key={route.path}
                        exact={route.exact}
                        path={route.path}
                        component={route.component}
                    />
                ))}
                
                {/* Distributor Protected Routes */}
                {ROUTE_CONFIG.distributor.map((route) => (
                    <DistributorProtectedRoute
                        key={route.path}
                        exact={route.exact}
                        path={route.path}
                        component={route.component}
                    />
                ))}
                
                {/* Dealer Protected Routes */}
                {ROUTE_CONFIG.dealer.map((route) => (
                    <DealerProtectedRoute
                        key={route.path}
                        exact={route.exact}
                        path={route.path}
                        component={route.component}
                    />
                ))}
                
                {/* Redirect Routes */}
                {REDIRECT_ROUTES.map((redirect) => (
                    <Route
                        key={redirect.from}
                        exact
                        path={redirect.from}
                        render={() => <Redirect to={redirect.to} />}
                    />
                ))}
            </Switch>
        </AuthProvider>
    );
}

export default App;
