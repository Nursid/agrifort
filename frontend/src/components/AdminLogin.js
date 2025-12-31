import { useState } from "react";
import { useAuth, USER_ROLES } from "../contexts/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "pages/Navbar";
import Footer from "./Footer";

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Typography,
  Input,
} from "@material-tailwind/react";

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [selectedRole, setSelectedRole] = useState(USER_ROLES.ADMIN);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate(); // ✅ v6

  const roleOptions = [
    { value: USER_ROLES.ADMIN, label: "Admin", color: "bg-red-500" },
    { value: USER_ROLES.FARMER, label: "Farmer", color: "bg-green-500" },
    { value: USER_ROLES.DISTRIBUTOR, label: "Distributor", color: "bg-blue-500" },
    { value: USER_ROLES.DEALER, label: "Dealer", color: "bg-purple-500" },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const result = await login(username, password, selectedRole);

      if (result.success) {
        // Redirect based on role (same logic)
        switch (result.role) {
          case USER_ROLES.ADMIN:
            navigate("/admin/dashboard");
            break;
          case USER_ROLES.FARMER:
            navigate("/farmer/dashboard");
            break;
          case USER_ROLES.DISTRIBUTOR:
            navigate("/distributor/dashboard");
            break;
          case USER_ROLES.DEALER:
            navigate("/dealer/dashboard");
            break;
          default:
            navigate("/admin/dashboard");
        }
      } else {
        setError(result.error || "Invalid username or password");
      }
    } catch (err) {
      console.error("Login error:", err);
      setError("Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const selectedRoleOption = roleOptions.find(
    (option) => option.value === selectedRole
  );

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <Card>
            <CardHeader color="lightBlue" contentPosition="none">
              <div className="w-full flex items-center justify-center">
                <Typography variant="h4" color="blue">
                  Multi-Role Login
                </Typography>
              </div>
            </CardHeader>

            <CardBody>
              <form onSubmit={handleSubmit} className="space-y-6">
                {error && (
                  <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                    {error}
                  </div>
                )}

                {/* Role Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Select Role
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {roleOptions.map((role) => (
                      <button
                        key={role.value}
                        type="button"
                        onClick={() => setSelectedRole(role.value)}
                        className={`p-3 rounded-lg border-2 transition-all duration-200 ${
                          selectedRole === role.value
                            ? `${role.color} text-white border-transparent shadow-lg`
                            : "bg-white text-gray-700 border-gray-300 hover:border-gray-400"
                        }`}
                      >
                        <div className="text-sm font-medium">
                          {role.label}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                <Input
                  type="text"
                  placeholder="Username"
                  size="lg"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />

                <Input
                  type="password"
                  placeholder="Password"
                  size="lg"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />

                <Button
                  type="submit"
                  color="lightBlue"
                  size="lg"
                  disabled={loading}
                  className="w-full"
                >
                  {loading
                    ? "Signing in..."
                    : `Sign in as ${selectedRoleOption?.label}`}
                </Button>
              </form>

              <div className="mt-6 text-center border-t pt-4">
                <p className="text-sm text-gray-600">
                  Don't have an account?{" "}
                  <Link
                    to="/register"
                    className="text-green-600 font-semibold hover:text-green-700 transition-colors"
                  >
                    Register here
                  </Link>
                </p>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default AdminLogin;
