import { FC, useState } from 'react'
import { SubmitHandler, useForm, useWatch } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { yupResolver } from '@hookform/resolvers/yup'
import { Button, TextField } from '@mui/material'

import { apiClientService } from '../../lib/api/axios.ts'
import { validationSchema } from '../../lib/utils/validationSchema.ts'
import { FormData } from '../../types'

export const LoginPage: FC = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>({ resolver: yupResolver(validationSchema) })

  const [authError, setAuthError] = useState('')
  const navigate = useNavigate()

  const email = useWatch({ control, name: 'email', defaultValue: '' })
  const password = useWatch({ control, name: 'password', defaultValue: '' })

  const isSubmitDisabled = !email || !password

  const onSubmit: SubmitHandler<FormData> = async ({ email, password }) => {
    try {
      const response = await apiClientService.login({ email, password })

      if (response.status === 200) {
        navigate('/')
      }
    } catch (error) {
      setAuthError('Ошибка авторизации. Проверьте почту и пароль.')
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="">
        <form onSubmit={handleSubmit(onSubmit)} className="w-[336px] flex flex-col gap-6">
          <div className="flex flex-col gap-6">
            <TextField
              {...register('email')}
              label="Email*"
              type="email"
              error={!!errors.email}
              helperText={errors.email?.message}
              fullWidth
              size="small"
              color="warning"
              focused
            />

            <TextField
              {...register('password')}
              label="Password*"
              type="password"
              error={!!errors.password}
              helperText={errors.password?.message}
              fullWidth
              size="small"
              color="warning"
            />
          </div>
          {authError && <div className="text-sm text-rose-700">{authError}</div>}
          <Button
            type="submit"
            variant="contained"
            fullWidth
            className="w-full"
            color="primary"
            disabled={isSubmitDisabled}
          >
            LOGIN
          </Button>
        </form>
      </div>
    </div>
  )
}
