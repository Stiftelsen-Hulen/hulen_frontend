import { getSanityNavigationElements } from '@/util/sanity'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

export default function HomePage({ data }: { data: any }) {
  return (
    <Box sx={{ display: 'flex' }}>
      <Typography>Content to be added...</Typography>
    </Box>
  )
}

export async function getServerSideProps() {
  const data = await getSanityNavigationElements()

  return {
    props: {
      data: data,
    },
  }
}
