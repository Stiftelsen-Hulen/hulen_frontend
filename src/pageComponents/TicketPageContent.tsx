import { DEFAULT_LAYOUT_MAXWIDTH } from '@/configs/constants'
import { Stack } from '@mui/material'

export const TicketPageContent = () => {
  return (
    <Stack width='100%' maxWidth={DEFAULT_LAYOUT_MAXWIDTH}>
      <iframe
        src='https://ticketco.events/no/nb/widgets/organizers/104/events?sections%5B%5D=title&amp;sections%5B%5D=datetime&amp;sections%5B%5D=tickets&amp;sections%5B%5D=location&amp;sections%5B%5D=contact_organizer&amp;sections%5B%5D=description&amp;tags=&amp;flush=true'
        width='100%'
        height='800px'
        frameBorder='0'
        scrolling='auto'
      />
    </Stack>
  )
}
