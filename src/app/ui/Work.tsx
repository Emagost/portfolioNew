import Image from 'next/image'
import Chip from './Chip'
import { scaleSkills } from '../lib/data'
import getFetchBase64 from '../lib/getFetchBase64'

export default async function WorkPage() {
  const blurImage = await getFetchBase64(
    'https://scale.com/_next/image?url=https%3A%2F%2Fsite-assets.plasmic.app%2Fd5d93c7ec9c83aac4707f36a035c228b.png&w=992&q=75',
  )

  return (
    <section id="work">
      <div className="flex items-center h-screen overflow-x-hidden bg-gradient-to-b from-[#1A1840] from-10% to-black to-20%">
        <h2 className="text-4xl transform -rotate-90 origin-left text-white px-4 py-2 ml-6 select-none">
          Work
        </h2>
        <div className="w-10/12 bg-[#0c0b20]">
          <div className="flex">
            <div className="p-4 lg:p-8">
              <div className="flex items-center gap-x-2">
                <Image
                  width={56}
                  height={56}
                  priority={false}
                  alt="Scale AI Logo"
                  src="https://scale.com/_next/image?url=https%3A%2F%2Fsite-assets.plasmic.app%2Fd5d93c7ec9c83aac4707f36a035c228b.png&w=992&q=75"
                  className="aspect-[2/2] w-14"
                  blurDataURL={blurImage}
                  placeholder="blur"
                />
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-gray-50">Scale AI</h3>
                  <span className="text-xs text-gray-300">San Francisco, California, USA</span>
                  <div className="text-xs text-gray-400">Full time</div>
                </div>
              </div>
              <div className="my-4">
                <h3 className="text-2xl font-medium text-gray-200">Software engineer</h3>
                <div className="flex flex-wrap max-w-[280px] h-full">
                  {scaleSkills.map((skill, index) => (
                    <Chip name={skill.name} bgColor={skill.bgColor} key={index} />
                  ))}
                </div>
              </div>
              <a
                target="_blank"
                href="https://scale.com/"
                about='Link to "Scale AI" website'
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                Learn more about Scale AI{' '}
                <Image
                  priority={false}
                  src="/arrowIcon.svg"
                  alt="arrow icon"
                  height={20}
                  width={20}
                  className="w-3 h-3 ml-2"
                />
              </a>
            </div>
            <div className="p-4 lg:p-8">
              <h3 className="text-xl font-bold text-gray-50">Job timeline</h3>
              <div className="max-w-2xl mx-auto">
                <ol className="relative border-l border-gray-200 dark:border-gray-700">
                  <li className="mb-10 ml-4">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                      February 2023 - Current
                    </time>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Software engineer
                    </h3>
                    <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                      Lead the development and maintenance of back-office systems and various tools,
                      managing a team of 5 developers and implementing agile methodologies.
                      <br />
                      As the backoffice lead, I handle intricate coding tasks, take on additional
                      responsibilities, and adapt to evolving work requirements.
                    </p>
                  </li>
                  <li className="mb-10 ml-4">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                      March 2022 - January 2023
                    </time>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Software developer
                    </h3>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                      Strengthened programming fundamentals while focusing on developing and
                      maintaining data extraction tools for various eCommerce platforms like Shopify
                      and BigCommerce. Delved into React.js for building tools and back-office
                      applications.
                    </p>
                  </li>
                  <li className="ml-4">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                      November 2021 - March 2022
                    </time>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Software developer
                    </h3>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                      Initiated my programming journey, specializing in creating web scrapers for
                      extracting data from eCommerce websites and making custom scripts
                    </p>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
