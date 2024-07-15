import { FC, useEffect, useState } from 'react'

import { apiClientService } from '../../lib/api/axios.ts'

export const HomePage: FC = () => {
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
    <div>
      <h1>Data from API</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}
