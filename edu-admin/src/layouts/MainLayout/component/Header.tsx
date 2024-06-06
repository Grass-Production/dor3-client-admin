import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Brightness4Icon from '@mui/icons-material/Brightness4';

import { Avatar, Badge, IconButton, ListItemAvatar } from '@mui/material';

import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
export const Header = (): JSX.Element => {
  const [theme, setThem] = useState('light');
  const body = document.body;

  const handleChangeTheme = (nameTheme: string): void => {
    setThem(nameTheme);
    body.className = '';
    body.classList.add(nameTheme);
  };

  return (
    <>
      <div className=" fixed top-0 w-full px-5 z-10 bg-primary-color flex h-[var(--headerHeight)] justify-between items-center">
        <div className=" flex items-center gap-6">
          <div className=" flex items-center gap-6">
            <IconButton sx={{ p: '10px' }} aria-label="menu">
              <MenuIcon className=" text-primary-text/60" fontSize="medium" />
            </IconButton>
            <img src="src/assets/images/Logo.png" alt="" />
          </div>
          <div className=" flex px-4 py-2 bg-second-color w-96 border border-gray-400 rounded-[50px]">
            <IconButton sx={{ p: 0, marginRight: '4px' }} type="button" aria-label="search">
              <SearchIcon className=" text-primary-text/60" />
            </IconButton>
            <input
              placeholder="Search"
              className=" text-primary-text bg-second-color outline-none w-full"
              type="text"
            />
          </div>
        </div>

        <div className=" flex gap-6 justify-between items-center">
          <IconButton>
            <Badge color="secondary" badgeContent={8}>
              <NotificationsIcon fontSize="large" color="primary" />
            </Badge>
          </IconButton>

          {theme === 'light' && (
            <div className="" onClick={() => handleChangeTheme('dark')}>
              <IconButton sx={{ p: 2, marginRight: '4px' }} type="button" aria-label="search">
                <NightsStayIcon className=" text-primary-text/70" fontSize="large" />
              </IconButton>
            </div>
          )}
          {theme === 'dark' && (
            <div onClick={() => handleChangeTheme('light')}>
              <IconButton sx={{ p: 2, marginRight: '4px' }} type="button" aria-label="search">
                <Brightness4Icon className=" text-primary-text/70" fontSize="large" />
              </IconButton>
            </div>
          )}

          <div className=" flex justify-center items-center gap-6">
            <div className=" flex justify-center items-center">
              <ListItemAvatar>
                <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
              </ListItemAvatar>
              <div className="">
                <h1 className=" text-sm font-bold text-sub-text">Dinh Hoang</h1>
                <h1 className=" text-xs font-semibold text-caption-text">Admin</h1>
              </div>
            </div>
            <div className=" border rounded-full border-primary-text/60 flex flex-col justify-center items-center">
              <IconButton sx={{ p: 0.4 }} type="button" aria-label="search">
                <ExpandMoreIcon className=" text-primary-text/60" fontSize="small" />
              </IconButton>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
