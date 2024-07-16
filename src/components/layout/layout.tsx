import { FC } from 'react'
import { Outlet, useLocation } from 'react-router-dom'

import { Container } from '@mui/material'

import { AppBar } from '../appBar/appBar.tsx'

const Layout: FC = () => {
  const location = useLocation()
  const isLoginPage = location.pathname === '/login'

  return (
    <div>
      {!isLoginPage && <AppBar />}
      <main className="mt-6">
        <Container maxWidth="xl">
          <Outlet />
        </Container>
      </main>
    </div>
  )
}

export default Layout
