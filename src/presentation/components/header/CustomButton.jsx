
import { Box, Typography, styled, Badge, Menu, MenuItem } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { useNavigate } from "react-router-dom";
import { isLoggedIn, getUser, logoutUser } from "../../../utils/authUtils";
import { useState, useEffect } from "react";

const CustomButtons = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const [cartCount, setCartCount] = useState(0);

  const user = getUser();

  
  useEffect(() => {
    const updateCartCount = () => {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      setCartCount(cart.length);
    };

    updateCartCount();
    window.addEventListener("storage", updateCartCount);

    return () => window.removeEventListener("storage", updateCartCount);
  }, []);

  return (
    <Wrapper>

      {isLoggedIn() ? (
        <>
          <Container onClick={(e) => setAnchorEl(e.currentTarget)}>
            <StyledIcon as={AccountCircleOutlinedIcon} />
            <Text>Hi {user?.email.split("@")[0]}</Text>
          </Container>

          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={() => setAnchorEl(null)}
          >
            <MenuItem onClick={() => { navigate("/profile"); setAnchorEl(null); }}>My Profile</MenuItem>
            <MenuItem onClick={() => { navigate("/orders"); setAnchorEl(null); }}>My Orders</MenuItem>
            <MenuItem onClick={() => { navigate("/wishlist"); setAnchorEl(null); }}>My Wishlist</MenuItem>
            <MenuItem onClick={() => { navigate("/cart"); setAnchorEl(null); }}>My Cart</MenuItem>
            <MenuItem
              onClick={() => {
                logoutUser();
                navigate("/login");
                setAnchorEl(null);
              }}
              sx={{ color: "red" }}
            >
              Logout
            </MenuItem>
          </Menu>
        </>
      ) : (
        <Container onClick={() => navigate("/login")}>
          <StyledIcon as={AccountCircleOutlinedIcon} />
          <Text>Login</Text>
        </Container>
      )}

      <Container onClick={() => navigate("/track-order")}>
        <StyledIcon as={LocationOnOutlinedIcon} />
        <Text>Track Order</Text>
      </Container>


      <Container onClick={() => navigate("/cart")}>
        <Badge badgeContent={cartCount} color="error">
          <ShoppingCartIcon style={{ color: "white", fontSize: 26 }} />
        </Badge>
        <Text>Cart</Text>
      </Container>
    </Wrapper>
  );
};

export default CustomButtons;

// ===== Styled Components =====
const Wrapper = styled(Box)`
  display: flex;
  align-items: center;
  margin-left: auto;
  gap: 2rem;
`;

const Container = styled(Box)`
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
  font-family: 'Open Sans', sans-serif;
`;

const StyledIcon = styled('span')`
  font-size: 28px;
  display: flex;
  align-items: center;
`;

const Text = styled(Typography)`
  color: white;
  font-size: 0.85rem;
  line-height: 1;
`;
