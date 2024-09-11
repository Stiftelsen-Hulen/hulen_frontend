import type { TechCategories } from '@/types/sanity/infoPages'
import { List, ListItem, Stack, Typography } from '@mui/material'

/**
 * Component for displaying a Tech Category with a list of items.
 * Intended to be used on the Tech Info page
 */
export const TechCategory = ({ category }: { category: TechCategories }) => {
  return (
    <Stack>
      <Typography variant='h6' sx={{ textDecoration: 'underline' }}>
        {category.category}
      </Typography>
      <List>
        {category.entries?.map((entry, i) => (
          <ListItem sx={{ fontSize: '1rem', padding: '0.1rem' }} key={i} disableGutters>
            {entry}
          </ListItem>
        ))}
      </List>
    </Stack>
  )
}
