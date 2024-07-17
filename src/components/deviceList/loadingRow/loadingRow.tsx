import { FC } from 'react'

import { TableCell, TableRow, Typography } from '@mui/material'

interface LoadingRowProps {
  colSpan: number
}

export const LoadingRow: FC<LoadingRowProps> = ({ colSpan }) => (
  <TableRow>
    <TableCell colSpan={colSpan}>
      <Typography align="center" color="textSecondary" fontSize="inherit">
        Загрузка...
      </Typography>
    </TableCell>
  </TableRow>
)
