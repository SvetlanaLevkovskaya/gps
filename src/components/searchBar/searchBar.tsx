import { FC, useState } from 'react'
import { useSelector } from 'react-redux'

import SearchIcon from '@mui/icons-material/Search'
import { Box, IconButton, InputAdornment, TextField, Typography } from '@mui/material'

import { getError } from '../../store/device/selectors.ts'

interface SearchBarProps {
  onSearch: (searchValue: string) => void
}

export const SearchBar: FC<SearchBarProps> = ({ onSearch }) => {
  const [searchValue, setSearchValue] = useState<string>('')
  const error = useSelector(getError)

  const handleSearch = () => {
    if (searchValue) {
      onSearch(searchValue)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)
    if (e.target.value === '') {
      onSearch('')
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch()
    }
  }

  return (
    <Box mb={2}>
      <TextField
        label="Поиск по ID"
        size="small"
        variant="outlined"
        value={searchValue}
        onKeyDown={handleKeyDown}
        onChange={handleChange}
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
      {error && (
        <Typography color="error" fontSize={14}>
          Ошибка при запросе данных
        </Typography>
      )}
    </Box>
  )
}
