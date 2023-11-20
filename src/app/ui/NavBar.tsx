'use client'
export default function NavBar() {
  const handleWorkClick = (event: any, element: string) => {
    event.preventDefault()
    const workElement = document.getElementById(element)
    if (workElement) {
      workElement.scrollIntoView({
        behavior: 'smooth',
      })
    }
  }

  return (
    <nav className="w-full sm:flex justify-around mt-8 text-xl hidden">
      <a onClick={event => handleWorkClick(event, 'about')} className="hover:cursor-pointer">
        About
      </a>
      <a onClick={event => handleWorkClick(event, 'work')} className="hover:cursor-pointer">
        Work
      </a>
      <a onClick={event => handleWorkClick(event, 'contact')} className="hover:cursor-pointer">
        Contact
      </a>
    </nav>
  )
}
