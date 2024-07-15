import { FC, useEffect, useState } from 'react'

import { Container } from '@mui/material'

import { apiClientService } from '../../lib/api/axios.ts'

export const DeviceList: FC = () => {
  const [data, setData] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiClientService.getAllDevices()
        setData(response.data)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [])

  return (
    <Container maxWidth="xl">
      <h1>Data from API</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </Container>
  )
}
