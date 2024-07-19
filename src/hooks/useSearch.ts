import { ChangeEvent, KeyboardEvent, useCallback, useState } from 'react'

import { useAppDispatch } from '../store'
import { searchDevices } from '../store/device/thunks'

export const useSearch = (clearSearch: () => void) => {
  const [searchValue, setSearchValue] = useState('')
  const dispatch = useAppDispatch()

  const handleSearch = useCallback(() => {
    if (searchValue) {
      dispatch(searchDevices(searchValue))
    } else {
      clearSearch()
    }
  }, [searchValue, dispatch, clearSearch])

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)
    if (e.target.value) {
      clearSearch()
    }
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') {
      handleSearch()
    }
  }

  return { searchValue, handleChange, handleKeyDown, handleSearch }
}
