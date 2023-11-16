import Image from 'next/image'
import Link from 'next/link'
import WorkPage from './ui/Work'
import ContactPage from './ui/Contact'

export default function HomePage() {
  return (
    <main className="h-screen w-full text-white bg-gradient-to-b from-black to-[#1A1840] relative">
      <div className="flex w-full h-full">
        <div className="container w-2/4 relative">
          <Image
            alt="Personal image"
            src="/testing.jpg"
            height={800}
            width={400}
            className="h-full w-4/5"
          />
          <h2 className="absolute text-4xl transform -rotate-90 origin-left text-white px-4 py-2 top-1/2 ml-6">
            About
          </h2>
        </div>
        <div className="container w-2/5">
          <nav className="w-full flex justify-around mt-8 text-xl">
            <Link href="/">About</Link>
            <Link href="/work">Work</Link>
            <Link href="/contact">Contact</Link>
          </nav>
          <div className="flex justify-center mt-80 flex-col">
            <h1 className="text-8xl mb-4">
              Emanuel
              <br />
              Gomez
            </h1>
            <h2 className="text-2xl ml-2">Software Engineer</h2>
          </div>
        </div>
      </div>
      <WorkPage />
      <ContactPage />
    </main>
  )
}
