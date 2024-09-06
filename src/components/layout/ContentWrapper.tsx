import { DEFAULT_LAYOUT_MAXWIDTH } from '@/configs/constants'
import { Stack } from '@mui/material'
import type { PropsWithChildren } from 'react'

/**
 * Wrapper for page content to set a consistent layout and max width
 */
export const ContentWrapper = ({ children }: PropsWithChildren) => {
  return (
    <Stack sx={{ alignItems: 'center', padding: '2rem', width: '100%' }}>
      <Stack
        sx={{
          width: '100%',
          maxWidth: DEFAULT_LAYOUT_MAXWIDTH,
          alignItems: 'center',
          wordBreak: 'break-word',
        }}
      >
        {children}
      </Stack>
    </Stack>
  )
}
