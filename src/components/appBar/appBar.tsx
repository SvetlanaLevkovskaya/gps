import { FC, SyntheticEvent, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined'
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined'
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined'
import {
  Box,
  Container,
  IconButton,
  Menu,
  MenuItem,
  AppBar as MuiAppBar,
  Tab,
  Tabs,
  Toolbar,
  Typography,
} from '@mui/material'

import { AppRoutes } from '../../lib/configs/routes.ts'

interface LinkItem {
  to: string
  label: string
  additional?: string
}

const links: LinkItem[] = [
  { to: AppRoutes.accounts, label: 'Учетные записи' },
  { to: AppRoutes.users, label: 'Пользователи' },
  { to: AppRoutes.objects, label: 'Объекты' },
  { to: AppRoutes.drivers, label: 'Водители' },
  { to: AppRoutes.notifications, label: 'Уведомления' },
  { to: AppRoutes.tasks, label: 'Задания', additional: ' в разработке' },
]

const buttonStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  border: 'none',
  background: 'none',
  cursor: 'pointer',
}

const iconBoxStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '50%',
  border: '2px solid gray',
  width: '40px',
  height: '40px',
  backgroundColor: 'lightGray',
  marginRight: '8px',
}

export const AppBar: FC = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  const handleLogout = () => {
    navigate(AppRoutes.login)
  }

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleTabChange = (event: SyntheticEvent, newValue: string) => {
    navigate(newValue)
  }

  return (
    <MuiAppBar position="static" sx={{ backgroundColor: 'white', color: 'grey' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Tabs
            value={location.pathname}
            onChange={handleTabChange}
            textColor="inherit"
            indicatorColor="inherit"
            variant="scrollable"
            scrollButtons="auto"
          >
            {links.map((link, index) => (
              <Tab
                key={index}
                label={link.label}
                value={link.to}
                sx={{
                  padding: '22px',
                  color: location.pathname === link.to ? '#00dbb6' : 'inherit',
                  borderBottom: location.pathname === link.to ? '2px solid #00dbb6' : 'inherit',
                  textTransform: 'capitalize',
                }}
              />
            ))}
          </Tabs>

          <Box sx={{ flexGrow: 1, marginLeft: { xs: '24px', md: '0' } }} />

          <IconButton color="inherit" sx={{ display: { xs: 'none', md: 'flex' } }}>
            <NotificationsNoneOutlinedIcon />
          </IconButton>

          <button onClick={handleClick} style={buttonStyle}>
            <Box sx={iconBoxStyle}>
              <PermIdentityOutlinedIcon sx={{ color: 'inherit' }} />
            </Box>

            <Typography variant="body2" sx={{ display: { xs: 'none', md: 'flex' } }}>
              Имя пользователя
            </Typography>
            <KeyboardArrowDownOutlinedIcon sx={{ display: { xs: 'none', md: 'flex' } }} />
          </button>

          <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu>
        </Toolbar>
      </Container>
    </MuiAppBar>
  )
}
