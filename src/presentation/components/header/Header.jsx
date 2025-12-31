

import { AppBar, Toolbar, Box, IconButton } from "@mui/material";
import { useState } from "react";
import Search from "./Search";
import logo from "../../../assets/pustakLogo.svg";
import CustomButtons from "./CustomButton";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import "./Header.css";

const Header = () => {
  const [openSearch, setOpenSearch] = useState(false);

  return (
    <AppBar className="header">
      <Toolbar className="header-toolbar">
        <Box className="logo-wrapper">
          <img src={logo} alt="logo" className="logo-img" />
        </Box>


        <Box className="search-desktop">
          <Search />
        </Box>

        <Box className="right-section">
          <CustomButtons />


          <IconButton
            className="mobile-search-icon"
            onClick={() => setOpenSearch(true)}
          >
            <SearchIcon />
          </IconButton>
        </Box>
      </Toolbar>

      {openSearch && (
        <Box className="mobile-search-wrapper">
          <Search />
          <IconButton onClick={() => setOpenSearch(false)}>
            <CloseIcon />
          </IconButton>
        </Box>
      )}
    </AppBar>
  );
};

export default Header;
