import { FC } from 'react'
import { Outlet, useLocation } from 'react-router-dom'

import { AppBar } from '../appBar/appBar.tsx'

const Layout: FC = () => {
  const location = useLocation()
  const isLoginPage = location.pathname === '/login'

  return (
    <div>
      {!isLoginPage && <AppBar />}
      <main className="mt-6">
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
