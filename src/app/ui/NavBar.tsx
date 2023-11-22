'use client'

import { handleWorkClick } from '../utils/smoothScrool'

export default function NavBar() {
  return (
    <nav className="w-full sm:flex justify-around mt-8 text-xl hidden">
      <a
        onClick={event => handleWorkClick(event, 'about')}
        href="#"
        className="hover:cursor-pointer"
      >
        About
      </a>
      <a
        onClick={event => handleWorkClick(event, 'work')}
        href="#"
        className="hover:cursor-pointer"
      >
        Work
      </a>
      <a
        onClick={event => handleWorkClick(event, 'contact')}
        href="#"
        className="hover:cursor-pointer"
      >
        Contact
      </a>
    </nav>
  )
}
