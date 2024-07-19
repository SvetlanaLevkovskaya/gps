import { FC } from 'react'
import { Outlet, useLocation } from 'react-router-dom'

import { Container } from '@mui/material'

import { AppBar } from '../appBar/appBar.tsx'

const Layout: FC = () => {
  const location = useLocation()
  const isLoginPage = location.pathname === '/login'

  return (
    <div className="flex flex-col min-h-screen">
      {!isLoginPage && <AppBar />}
      <main className="flex-1">
        <Container maxWidth="xl" sx={{ marginTop: '16px' }}>
          <Outlet />
        </Container>
      </main>
    </div>
  )
}

export default Layout
