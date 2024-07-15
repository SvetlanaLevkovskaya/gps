import { RouteObject, createBrowserRouter } from 'react-router-dom'

import { HomePage } from '../../modules/home/homePage.tsx'
import { LoginPage } from '../../modules/login/loginPage.tsx'

import { AppRoutes } from './routes.ts'

const authRoutes: RouteObject[] = [
  {
    path: AppRoutes.login,
    element: (
      <>
        <LoginPage />
      </>
    ),
  },
]

export const appRoutersConfig = createBrowserRouter([
  ...authRoutes,
  {
    path: AppRoutes.home,
    element: <HomePage />,
  },
])
