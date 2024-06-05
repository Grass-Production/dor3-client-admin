import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Button } from '@/components/Button/Button';
import {
  Avatar,
  Badge,
  Box,
  Container,
  Divider,
  IconButton,
  InputBase,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  Typography,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { IconArrowDownCircle } from '@/assets/svg';
export const Header = (): JSX.Element => {
  return (
    <>
      <div className=" bg-white flex h-[var(--headerHeight)] justify-between items-center">
        <IconButton sx={{ p: '10px' }} aria-label="menu">
          <MenuIcon fontSize="medium" />
        </IconButton>

        <div className=" flex px-4 py-4 bg-background w-96 border border-gray-400 rounded-[20px]">
          <IconButton sx={{ p: 0, marginRight: '4px' }} type="button" aria-label="search">
            <SearchIcon />
          </IconButton>
          <input placeholder="Search" className=" bg-background outline-none w-full" type="text" />
        </div>
        <Badge color="secondary" badgeContent={8}>
          <NotificationsIcon fontSize="large" color="primary" />
        </Badge>

        <div>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Moni Roy"
              secondary={
                <>
                  <Typography sx={{ display: 'inline' }} component="span" variant="body2" color="text.primary">
                    Admin
                  </Typography>
                </>
              }
            />
          </ListItem>
        </div>
        <IconArrowDownCircle size="40" />
      </div>
    </>
  );
};
