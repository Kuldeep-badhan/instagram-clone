import React from "react";
import { Stack, Button, Typography, Avatar } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import SendIcon from "@mui/icons-material/Send";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import MenuIcon from '@mui/icons-material/Menu';

import "./SideBarNav.scss";
import Option from "./Option";

const SideBarNav = () => {
  return (
    <div className="sidebar_nav">
      <Stack spacing="0.8rem" justifyContent={'flex-start'} >
        <Typography variant="h5" component="h1" padding={'0 1rem'} >
          Instagram
        </Typography>
        <Option Icon={HomeIcon} text='Home' />
        <Option Icon={SearchIcon} text='Search' />
        <Option Icon={ExploreOutlinedIcon} text='Explore' />
        <Option Icon={SlideshowIcon} text='Reels' />
        <Option Icon={SendIcon} text='Message' />
        <Option Icon={FavoriteBorderIcon} text='Notification' />
        <Option Icon={AddBoxOutlinedIcon} text='Create' />
        <Option Icon={Avatar} text='Profile' />
        <Option Icon={MenuIcon} text='More' />
      </Stack>
    </div>
  );
};

export default SideBarNav;
