import { CircularProgress, Stack } from '@mui/material'

export default function Loading() {
  return (
    <Stack height='100%' width='100%' justifyContent='center' alignItems='center'>
      <CircularProgress size='10rem' color='secondary' />
    </Stack>
  )
}
