import Image from 'next/image'
import Chip from './Chip'
import { scaleSkills } from '../lib/data'

export default function WorkPage() {
  return (
    <section>
      <div className="flex items-center h-screen overflow-x-hidden bg-gradient-to-b from-[#1A1840] from-5% to-black to-15%">
        <h2 className="text-4xl transform -rotate-90 origin-left text-white px-4 py-2 ml-6">
          Work
        </h2>
        <div className="flex-grow justify-center w-10/12">
          <div>
            <div className="group bg-[#0c0b20] p-4 lg:p-8">
              <div className="flex items-center gap-x-2">
                <Image
                  width={992}
                  height={75}
                  alt="Company Logo"
                  className="aspect-[2/2] w-14"
                  src="https://scale.com/_next/image?url=https%3A%2F%2Fsite-assets.plasmic.app%2Fd5d93c7ec9c83aac4707f36a035c228b.png&w=992&q=75"
                />
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-gray-50">Scale AI</h3>
                  <span className="text-xs text-gray-300">San Francisco, California, USA</span>
                  <div className="text-xs text-gray-400">Full time</div>
                </div>
              </div>
              <div className="my-4">
                <h3 className="text-2xl font-medium text-gray-200">Software engineer</h3>
                <div className="flex flex-wrap max-w-[280px]">
                  {scaleSkills.map((skill, index) => (
                    <Chip name={skill.name} color={skill.color} key={index} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
