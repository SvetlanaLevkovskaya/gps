import React, { FC, PropsWithChildren } from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

import { AppRoutes } from '../../lib/configs/routes.ts'
import { getEmail } from '../../store/user/selectors.ts'

export const LoginRoute: FC<PropsWithChildren> = ({ children }) => {
  const email = useSelector(getEmail)
  if (email) {
    return <Navigate to={AppRoutes.home} />
  }
  return children
}
