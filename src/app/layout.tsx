import type { Metadata } from 'next'
import { Work_Sans } from 'next/font/google'
import './globals.css'

const WorkSans = Work_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Emanuel Gomez - Portfolio',
  description:
    "Emanuel Gomez - Portfolio: Explore a showcase of my expertise and achievements as a dedicated web developer. Immerse yourself in a collection of my diverse projects, each reflecting a passion for innovative and user-centric design. As a software engineer, I bring a wealth of experience and skills to the table, ensuring seamless and cutting-edge solutions for every project. Engage with the various facets of my professional journey, from honing my craft as a student of systems engineering at the university to applying theoretical knowledge to real-world scenarios. This portfolio serves as a testament to my commitment to continuous learning and growth in the dynamic field of technology. Whether you're a potential collaborator or client, feel free to reach out using the provided contact form. I am open to discussing and undertaking new and exciting projects. My dedication to delivering high-quality results is evident in every line of code and every design element featured in this portfolio. Browse through my work to witness the fusion of creativity and technical prowess. From web development projects to software engineering endeavors, each entry in this portfolio is a testament to my skills and dedication. Join me on this journey as I navigate the ever-evolving landscape of technology, fueled by a passion for innovation and a relentless pursuit of excellence.",
  icons: [
    {
      rel: 'icon',
      type: 'image/svg',
      sizes: '32x32',
      href: '/icon.svg',
      url: '/icon.svg',
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={WorkSans.className}>{children}</body>
    </html>
  )
}
