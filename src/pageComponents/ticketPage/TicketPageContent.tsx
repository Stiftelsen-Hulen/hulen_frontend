/**
 * Renders the content for the Ticket page
 * Contains an iframe that shows the next events at hulen from ticketco
 */
export const TicketPageContent = () => {
  return (
    <iframe
      src='https://ticketco.events/no/nb/widgets/organizers/104/events?sections%5B%5D=title&amp;sections%5B%5D=datetime&amp;sections%5B%5D=tickets&amp;sections%5B%5D=location&amp;sections%5B%5D=contact_organizer&amp;sections%5B%5D=description&amp;tags=&amp;flush=true'
      width='100%'
      height='800px'
      frameBorder='0'
      scrolling='auto'
      title='Frame section containing the shows and tickets available'
    />
  )
}
