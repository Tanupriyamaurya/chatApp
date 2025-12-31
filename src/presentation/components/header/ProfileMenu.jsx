import { Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { logoutUser, getUser } from "../../utils/authUtils";

const ProfileMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();
  const user = getUser();

  const open = Boolean(anchorEl);

  return (
    <>
      <span onClick={(e) => setAnchorEl(e.currentTarget)} className="profile-btn">
        Hi, {user?.email}
      </span>

      <Menu anchorEl={anchorEl} open={open} onClose={() => setAnchorEl(null)}>
        <MenuItem onClick={() => navigate("/profile")}>My Profile</MenuItem>
        <MenuItem onClick={() => navigate("/orders")}>My Orders</MenuItem>
        <MenuItem onClick={() => navigate("/wishlist")}>My Wishlist</MenuItem>
        <MenuItem onClick={() => navigate("/address")}>Manage Address</MenuItem>
        <MenuItem onClick={() => navigate("/cart")}>My Cart</MenuItem>

        <MenuItem
          onClick={() => {
            logoutUser();
            navigate("/login");
          }}
          sx={{ color: "red" }}
        >
          Logout
        </MenuItem>
      </Menu>
    </>
  );
};

export default ProfileMenu;
