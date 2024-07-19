import { createTheme } from '@mui/material'

export const themeConfig = createTheme({
  components: {
    MuiTabs: {
      styleOverrides: {
        root: {},
        indicator: {
          backgroundColor: '#00dbb6',
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: 'capitalize',
          '&.Mui-selected': {
            color: '#00dbb6',
            padding: '24px',
          },
        },
      },
    },
  },
  palette: {
    primary: { main: '#00dbb6', contrastText: '#fff' },
  },
})
