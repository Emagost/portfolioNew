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
        <div className="w-10/12 bg-[#0c0b20]">
          <div className="flex">
            <div className="p-4 lg:p-8">
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
                <div className="flex flex-wrap max-w-[280px] h-full">
                  {scaleSkills.map((skill, index) => (
                    <Chip name={skill.name} bgColor={skill.bgColor} key={index} />
                  ))}
                </div>
              </div>
              <a
                target="_blank"
                href="https://scale.com/"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                Learn more{' '}
                <svg
                  className="w-3 h-3 ml-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
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
                      Played a crucial role in improving and building new backoffice tools and
                      optimizing workflows.
                      <br />
                      Worked independently on the project, demonstrating excellent planning, design,
                      and development capacity.
                      <br />
                      Recently transitioned to a tech lead role working along with another engineer
                      applying agile methodologies and SCRUM, creating sprints for five engineers,
                      prioritizing tasks, and engaging with stakeholders to gather requirements.
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
                      Development and implementation of custom extractors for different platforms.
                      Migrating and refactoring code to a GCP environment.
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
                      Make custom scripts and scrapers to extract data from different sites
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
