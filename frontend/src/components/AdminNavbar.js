import { useLocation, useNavigate } from "react-router-dom";
import {
  Button,
  IconButton,
  Input,
  Avatar,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import ProfilePicture from "assets/img/team-1-800x800.jpg";
import { useAuth } from "../contexts/AuthContext";

export default function AdminNavbar({ showSidebar, setShowSidebar }) {
  const location = useLocation().pathname;
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/admin/login");
  };

  const pageTitle =
    location === "/" ? "Dashboard" : location.replace("/", "").toUpperCase();

  return (
    <nav className="bg-light-blue-500 md:ml-64 px-4 py-4">
      <div className="flex items-center justify-between">

        {/* LEFT - MENU + TITLE */}
        <div className="flex items-center gap-4">
          {/* Mobile Menu */}
          <IconButton
            variant="text"
            color="white"
            className="md:hidden"
            onClick={() =>
              setShowSidebar(showSidebar ? false : true)
            }
          >
            {showSidebar ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </IconButton>

          <h4 className="text-white font-semibold tracking-wide text-sm uppercase">
            {pageTitle}
          </h4>
        </div>

        {/* RIGHT - SEARCH + PROFILE */}
        <div className="flex items-center gap-4">
          {/* Search */}
          <div className="hidden sm:block w-56">
            <Input
              label="Search"
              color="white"
              className="text-white"
            />
          </div>

          {/* Profile Dropdown */}
          <Menu placement="bottom-end">
            <MenuHandler>
              <Avatar
                src={ProfilePicture}
                alt="profile"
                className="cursor-pointer"
              />
            </MenuHandler>
            <MenuList>
              <MenuItem onClick={handleLogout} className="text-red-500">
                Logout
              </MenuItem>
            </MenuList>
          </Menu>
        </div>
      </div>
    </nav>
  );
}
