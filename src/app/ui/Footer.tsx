'use client'
import Image from 'next/image'
import { handleWorkClick } from '../utils/smoothScrool'

export default function Footer() {
  return (
    <footer className="relative py-20 flex flex-col items-center bg-cyan-900 overflow-hidden md:py-30">
      <div className="relative z-[1] container m-auto px-6 md:px-12">
        <div className="m-auto md:w-10/12 lg:w-8/12 xl:w-6/12">
          <div className="flex flex-wrap items-center justify-between md:flex-nowrap">
            <div className="w-full space-x-12 flex justify-center text-gray-300 sm:w-7/12 md:justify-start">
              <ul className="list-disc list-inside space-y-8">
                <li>
                  <a
                    onClick={event => handleWorkClick(event, 'about')}
                    href="#"
                    className="hover:text-sky-400 transition hover:cursor-pointer"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={event => handleWorkClick(event, 'work')}
                    className="hover:text-sky-400 transition hover:cursor-pointer"
                  >
                    Work
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={event => handleWorkClick(event, 'contact')}
                    className="hover:text-sky-400 transition hover:cursor-pointer"
                  >
                    Contact
                  </a>
                </li>
              </ul>
              <ul role="list" className="space-y-8">
                <li>
                  <a
                    href="https://github.com/Emagost"
                    className="flex items-center space-x-3 hover:text-sky-400 transition"
                  >
                    <Image alt="Github icon" src="/githubIcon.svg" width={24} height={24} />
                    <span>Github</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/emanuel-gomez09/"
                    className="flex items-center space-x-3 hover:text-sky-400 transition"
                  >
                    <svg
                      fill="white"
                      role="img"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      className="fill-current transition duration-700 ease-in-out text-gray-700 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-500"
                    >
                      <title>LinkedIn</title>
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                    <span>Linkedin</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-10/12 m-auto  mt-16 space-y-6 text-center sm:text-left sm:w-5/12 sm:mt-auto">
              <span className="block text-gray-300">Emanuel Gomez &copy; 2023</span>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute h-full inset-0 flex items-center">
        <div
          aria-hidden="true"
          className="bg-layers bg-scale w-56 h-56 m-auto blur-xl bg-gradient-to-r from-[#1A1840] via-[#1f173b] to-[#221439] rounded-full md:w-[30rem] md:h-[30rem] md:blur-3xl"
        ></div>
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-0 w-full h-full bg-[#1A1840] opacity-95"
      ></div>
    </footer>
  )
}
