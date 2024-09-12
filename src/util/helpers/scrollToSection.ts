/**
 * Scrolls the page to a specific section identified by the elementId
 */
export function scrollToSection(elementId: string) {
  const matchingElement = document.getElementById(elementId)
  if (matchingElement) {
    matchingElement.scrollIntoView({ behavior: 'smooth' })
  }
}
