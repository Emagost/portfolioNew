import WorkPage from './ui/Work'
import ContactPage from './ui/Contact'
import AboutPage from './ui/About'
export default function HomePage() {
  return (
    <main
      className="h-screen w-full text-white bg-gradient-to-b from-black to-[#1A1840] relative"
      id="about"
    >
      <AboutPage />
      <WorkPage />
      <ContactPage />
    </main>
  )
}
