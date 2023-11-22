import Image from 'next/image'
import NavBar from './NavBar'

export default function AboutPage() {
  return (
    <div className="flex w-full h-full">
      <div className="container w-2/4 relative">
        <Image
          alt="Personal image"
          src="/myPicture.jpeg"
          height={1600}
          width={1224}
          className="h-full w-4/5 object-cover hidden lg:block"
          blurDataURL="/blurMyPicture.webp"
          priority
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
            Dedicated Systems student at the National University of La Plata, driven by a genuine
            curiosity for the changing landscape of technology.
            <br />
            Committed to perfecting my skills, I find enjoyment in accepting new challenges and
            continually expanding my knowledge base.
          </p>
        </div>
      </div>
    </div>
  )
}
