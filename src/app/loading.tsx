import { Box, CircularProgress } from '@mui/material'

export default function Loading() {
  return (
    <Box width='100%' height='100%' justifyContent={'center'}>
      <CircularProgress />
    </Box>
  )
}
