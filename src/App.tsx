import { FC } from 'react'
import { RouterProvider } from 'react-router-dom'

import { ThemeProvider, createTheme } from '@mui/material'

import { appRoutersConfig } from './lib/configs/routerConfig.tsx'

const theme = createTheme({
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

const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={appRoutersConfig}></RouterProvider>
    </ThemeProvider>
  )
}

export default App
