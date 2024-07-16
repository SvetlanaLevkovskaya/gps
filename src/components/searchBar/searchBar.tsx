import { FC, useState } from 'react'

import SearchIcon from '@mui/icons-material/Search'
import { Box, IconButton, InputAdornment, TextField, Typography } from '@mui/material'

import { apiClientService } from '../../lib/api/axios.ts'
import { Device } from '../../types'

interface SearchBarProps {
  onSearch: (devices: Device[]) => void
}

export const SearchBar: FC = ({ onSearch }) => {
  const [searchValue, setSearchValue] = useState<string>('')
  const [error, setError] = useState<string | null>(null)

  const handleSearch = async () => {
    try {
      const response = await apiClientService.getAllDevices({ params: { id: searchValue } })
      onSearch(response.data)
      setError(null)
    } catch (error) {
      setError('Ошибка при получении данных')
      onSearch([])
    }
  }
  return (
    <Box mb={2}>
      <TextField
        label="Поиск по ID"
        size="small"
        variant="outlined"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="1 или 1,2"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton aria-label="search" onClick={handleSearch}>
                <SearchIcon style={{ fill: 'gray' }} />
              </IconButton>
            </InputAdornment>
          ),
        }}
        sx={{
          '& .MuiFormLabel-root': {
            fontSize: '0.875rem',
          },
          '& .MuiInputBase-input::placeholder': {
            fontSize: '0.875rem',
          },
        }}
      />
      {error && <Typography color="error">{error}</Typography>}
    </Box>
  )
}
