import { RouteObject, createBrowserRouter } from 'react-router-dom'

import { DeviceList } from '../../components/deviceList/deviceList.tsx'
import Layout from '../../components/layout/layout.tsx'
import { HomePage } from '../../modules/home/homePage'
import { LoginPage } from '../../modules/login/loginPage'

import { AppRoutes } from './routes'

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
    element: <Layout />,
    children: [
      {
        path: AppRoutes.home,
        element: <HomePage />,
      },
      {
        path: AppRoutes.objects,
        element: <DeviceList />,
      },
      {
        path: AppRoutes.accounts,
        element: <HomePage />,
      },
      {
        path: AppRoutes.users,
        element: <HomePage />,
      },
      {
        path: AppRoutes.drivers,
        element: <HomePage />,
      },
      {
        path: AppRoutes.notifications,
        element: <HomePage />,
      },
      {
        path: AppRoutes.tasks,
        element: <HomePage />,
      },
    ],
  },
])
