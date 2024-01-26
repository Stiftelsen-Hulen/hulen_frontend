import { Box, CircularProgress } from '@mui/material'

const Loading = () => {
  return (
    <Box display='flex' width='100%' height='100%' alignItems='center' justifyContent={'center'}>
      <CircularProgress size='10rem' />
    </Box>
  )
}

export default Loading
