import { Switch, Route, Redirect } from 'react-router-dom';
import { AuthProvider, USER_ROLES } from 'contexts/AuthContext';
import ProtectedRoute from 'components/ProtectedRoute';
import AdminLayout from 'components/AdminLayout';
import AdminLogin from 'components/AdminLogin';
import Registration from 'components/Registration';
import Dashboard from 'pages/Dashboard';
import Settings from 'pages/Settings';
import Tables from 'pages/Tables';
import Maps from 'pages/Maps';
import LandingPage from 'pages/LandingPage';
import Products from 'pages/Products';
import About from 'pages/About';
import OurTeam from 'pages/OurTeam';
import Contact from 'pages/Contact';
import 'assets/styles/tailwind.css';

function App() {
    return (
        <AuthProvider>
            <Switch>
                {/* Public Landing Page */}
                <Route exact path="/" component={LandingPage} />
                <Route exact path="/products" component={Products} />
                <Route exact path="/about" component={About} />
                <Route exact path="/ourteam" component={OurTeam} />
                <Route exact path="/contact" component={Contact} />
                {/* Multi-Role Login */}
                <Route exact path="/login" component={AdminLogin} />
                <Route exact path="/admin/login" component={AdminLogin} />
                
                {/* Registration */}
                <Route exact path="/register" component={Registration} />
                <Route exact path="/admin/register" component={Registration} />
                
                {/* Admin Routes */}
                <ProtectedRoute 
                    exact 
                    path="/admin/dashboard" 
                    allowedRoles={[USER_ROLES.ADMIN]}
                    redirectTo="/login"
                    component={() => (
                        <AdminLayout>
                            <Dashboard />
                        </AdminLayout>
                    )} 
                />
                <ProtectedRoute 
                    exact 
                    path="/admin/settings" 
                    allowedRoles={[USER_ROLES.ADMIN]}
                    redirectTo="/login"
                    component={() => (
                        <AdminLayout>
                            <Settings />
                        </AdminLayout>
                    )} 
                />
                <ProtectedRoute 
                    exact 
                    path="/admin/tables" 
                    allowedRoles={[USER_ROLES.ADMIN]}
                    redirectTo="/login"
                    component={() => (
                        <AdminLayout>
                            <Tables />
                        </AdminLayout>
                    )} 
                />
                <ProtectedRoute 
                    exact 
                    path="/admin/maps" 
                    allowedRoles={[USER_ROLES.ADMIN]}
                    redirectTo="/login"
                    component={() => (
                        <AdminLayout>
                            <Maps />
                        </AdminLayout>
                    )} 
                />

                {/* Farmer Routes */}
                <ProtectedRoute 
                    exact 
                    path="/farmer/dashboard" 
                    allowedRoles={[USER_ROLES.FARMER]}
                    redirectTo="/login"
                    component={() => (
                        <AdminLayout>
                            <Dashboard />
                        </AdminLayout>
                    )} 
                />

                {/* Distributor Routes */}
                <ProtectedRoute 
                    exact 
                    path="/distributor/dashboard" 
                    allowedRoles={[USER_ROLES.DISTRIBUTOR]}
                    redirectTo="/login"
                    component={() => (
                        <AdminLayout>
                            <Dashboard />
                        </AdminLayout>
                    )} 
                />

                {/* Dealer Routes */}
                <ProtectedRoute 
                    exact 
                    path="/dealer/dashboard" 
                    allowedRoles={[USER_ROLES.DEALER]}
                    redirectTo="/login"
                    component={() => (
                        <AdminLayout>
                            <Dashboard />
                        </AdminLayout>
                    )} 
                />
                
                {/* Redirect /admin to dashboard if authenticated, otherwise to login */}
                <Route exact path="/admin" render={() => <Redirect to="/admin/dashboard" />} />
                
                {/* Only redirect specific unknown page routes, not all paths */}
                <Route exact path="/dashboard" render={() => <Redirect to="/admin/dashboard" />} />
                <Route exact path="/settings" render={() => <Redirect to="/admin/settings" />} />
                <Route exact path="/tables" render={() => <Redirect to="/admin/tables" />} />
                <Route exact path="/maps" render={() => <Redirect to="/admin/maps" />} />
            </Switch>
        </AuthProvider>
    );
}

export default App;
