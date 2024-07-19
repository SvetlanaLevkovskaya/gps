import { FC } from 'react'
import { RouterProvider } from 'react-router-dom'

import { ThemeProvider } from '@mui/material'

import { appRoutersConfig } from './lib/configs/routerConfig.tsx'
import { themeConfig } from './lib/theme/config.ts'

const App: FC = () => {
  return (
    <ThemeProvider theme={themeConfig}>
      <RouterProvider router={appRoutersConfig}></RouterProvider>
    </ThemeProvider>
  )
}

export default App
