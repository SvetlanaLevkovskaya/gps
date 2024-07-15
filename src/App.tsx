import { FC } from 'react'
import { RouterProvider } from 'react-router-dom'

import { ThemeProvider, createTheme } from '@mui/material'
import { green } from '@mui/material/colors'

import { appRoutersConfig } from './lib/configs/routerConfig.tsx'

const theme = createTheme({
  palette: {
    primary: { main: '#855f26' },
    secondary: green,
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
