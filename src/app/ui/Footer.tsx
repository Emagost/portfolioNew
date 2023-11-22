'use client'
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
                    className="hover:text-sky-400 transition hover:cursor-pointer"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    onClick={event => handleWorkClick(event, 'work')}
                    className="hover:text-sky-400 transition hover:cursor-pointer"
                  >
                    Work
                  </a>
                </li>
                <li>
                  <a
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
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="w-5"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                    </svg>
                    <span>Github</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/emanuel-gomez09/"
                    className="flex items-center space-x-3 hover:text-sky-400 transition"
                  >
                    <svg
                      className="fill-current transition duration-700 ease-in-out text-gray-700 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-500"
                      role="img"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
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
