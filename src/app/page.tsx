import * as React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Unstable_Grid2'
import Drawer from '@mui/material/Drawer'
import Typography from '@mui/material/Typography'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import Alert from '@mui/material/Alert'
import AlertTitle from '@mui/material/AlertTitle'

export default function HomePage() {
  return (
    <Box sx={{ display: 'flex' }}>
      <div>
        <Alert severity='info' sx={{ mt: 2, mb: 5 }}>
          <AlertTitle>Hello 👋</AlertTitle>
          This app uses the Next.js App Router and Material UI v5.
        </Alert>
        <Grid container rowSpacing={3} columnSpacing={3}>
          <Typography>Test</Typography>
        </Grid>
      </div>
      <Drawer
        sx={{
          width: 320,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 320,
            boxSizing: 'border-box',
            top: ['48px', '56px', '64px'],
            height: 'auto',
            bottom: 0,
          },
        }}
        variant='permanent'
        anchor='right'
      >
        <List sx={{ px: 2 }}>
          <ListItem disablePadding>
            <Typography variant='overline' sx={{ fontWeight: 500 }}>
              On this page
            </Typography>
          </ListItem>
        </List>
      </Drawer>
    </Box>
  )
}
