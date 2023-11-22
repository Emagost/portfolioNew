type TSection = 'about' | 'work' | 'contact'

export const handleWorkClick = (event: any, element: TSection) => {
  event.preventDefault()
  const workElement = document.getElementById(element)
  if (workElement) {
    workElement.scrollIntoView({
      behavior: 'smooth',
    })
  }
}
