'use client'
import emailjs from '@emailjs/browser'
import { FormEvent, useCallback, useRef, useState } from 'react'

export default function ContactPage() {
  const [isMessageSend, setIsMessageSend] = useState(false)
  const form = useRef()

  const sendEmail = useCallback((event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_TEMPLATE_ID as string,
        form.current as any,
        process.env.NEXT_PUBLIC_PUBLIC_KEY as string,
      )
      .then(
        result => {
          setIsMessageSend(true)
        },
        error => {
          setIsMessageSend(false)
        },
      )
  }, [])

  return (
    <section id="contact">
      {isMessageSend && (
        <div className="relative">
          <div
            className="absolute top-0 right-0 p-2 bg-green-800 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex"
            role="alert"
          >
            <button></button>
            <span className="flex rounded-full bg-green-500 uppercase px-2 py-1 text-xs font-bold mr-3">
              New
            </span>
            <span className="font-semibold mr-2 text-left flex-auto">
              Message sent successfully
            </span>
          </div>
        </div>
      )}
      <div className="flex items-center h-screen overflow-x-hidden bg-gradient-to-b from-black to-[#1A1840]">
        <h2 className="text-4xl transform -rotate-90 origin-left text-white px-4 py-2 ml-6 select-none">
          Contact
        </h2>
        <div className="relative flex items-top justify-center min-h-screen sm:items-center sm:pt-0">
          <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
            <div className="mt-8 overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-6 mr-2 sm:rounded-lg">
                  <h1 className="text-4xl sm:text-5xl text-gray-800 dark:text-white font-extrabold tracking-tight">
                    Get in touch
                  </h1>
                  <p className="text-normal text-lg sm:text-2xl font-medium text-gray-600 dark:text-gray-400 mt-2">
                    Fill in the form to start a conversation
                  </p>
                  <div className="flex items-center mt-8 text-gray-600 dark:text-gray-400">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      className="w-8 h-8 text-gray-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <div className="ml-4 text-md tracking-wide font-semibold w-40">
                      Buenos Aires, Argentina
                    </div>
                  </div>
                  <div className="flex items-center mt-4 text-gray-600 dark:text-gray-400">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      className="w-8 h-8 text-gray-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <div className="ml-4 text-md tracking-wide font-semibold w-40">
                      +54 2976236894
                    </div>
                  </div>
                  <div className="flex items-center mt-2 text-gray-600 dark:text-gray-400">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      className="w-8 h-8 text-gray-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <div className="ml-4 text-md tracking-wide font-semibold w-40">
                      emagozz@gmail.com
                    </div>
                  </div>
                </div>
                <form
                  ref={form as any}
                  onSubmit={sendEmail}
                  className="p-6 flex flex-col justify-center"
                >
                  <div className="flex flex-col">
                    <label className="hidden">Full Name</label>
                    <input
                      required
                      type="text"
                      name="user_name"
                      id="name"
                      placeholder="Full Name"
                      className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 font-semibold focus:border-indigo-500 focus:outline-none"
                    />
                  </div>
                  <div className="flex flex-col mt-2">
                    <label className="hidden">Email</label>
                    <input
                      required
                      type="email"
                      name="user_email"
                      id="email"
                      placeholder="Email"
                      className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 font-semibold focus:border-indigo-500 focus:outline-none"
                    />
                  </div>
                  <div className="flex flex-col mt-2">
                    <label className="hidden">How can I help you?</label>
                    <textarea
                      required
                      name="message"
                      id="tel"
                      placeholder="Message"
                      className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 font-semibold focus:border-indigo-500 focus:outline-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="md:w-32 bg-indigo-600 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-indigo-500 transition ease-in-out duration-300"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
