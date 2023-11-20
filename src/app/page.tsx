import Image from 'next/image'
import WorkPage from './ui/Work'
import ContactPage from './ui/Contact'
import NavBar from './ui/NavBar'

export default function HomePage() {
  return (
    <main
      className="h-screen w-full text-white bg-gradient-to-b from-black to-[#1A1840] relative"
      id="about"
    >
      <div className="flex w-full h-full">
        <div className="container w-2/4 relative">
          <Image
            alt="Personal image"
            src="/testing.jpg"
            height={800}
            width={400}
            className="h-full w-4/5"
          />
          <h2 className="absolute text-4xl transform -rotate-90 origin-left text-white px-4 py-2 top-1/2 ml-6 select-none">
            About
          </h2>
        </div>
        <div className="container w-2/5">
          <NavBar />
          <div className="flex justify-center sm:mt-24 lg:mt-80 flex-col">
            <h1 className="sm:text-4xl lg:text-8xl mb-4">
              Emanuel
              <br />
              Gomez
            </h1>
            <h2 className="sm:text-xl lg:text-2xl ml-2">Software Engineer</h2>
            <p className="ml-2 mt-4 sm:text-sm lg:text-base font-normal text-gray-500 dark:text-gray-400">
              Enthusiastic software engineer pursuing a Systems Engineering degree. Proven expertise
              in programming fundamentals and web development.
              <br />
              Advanced from Software Developer to Tech Lead, showcasing adaptability and leadership.
              <br />
              Ongoing commitment to academic and professional growth.
            </p>
          </div>
        </div>
      </div>
      <WorkPage />
      <ContactPage />
    </main>
  )
}
