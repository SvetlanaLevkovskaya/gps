import { FC } from 'react'

import { TableCell, TableRow, Typography } from '@mui/material'

interface EmptyRowProps {
  colSpan: number
}

export const EmptyRow: FC<EmptyRowProps> = ({ colSpan }) => (
  <TableRow>
    <TableCell colSpan={colSpan}>
      <Typography align="center" color="textSecondary" fontSize="inherit">
        Объекты не найдены
      </Typography>
    </TableCell>
  </TableRow>
)
