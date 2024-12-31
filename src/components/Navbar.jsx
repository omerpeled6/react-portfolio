import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaDiscord } from 'react-icons/fa'
import CV from '../../public/CV.pdf'

export default function Navbar() {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <p className="text-white font-bold text-3xl">OP</p>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href={CV}
          download="Omer_Peled_CV.pdf"
          className="text-lg  font-extrabold hover:text-red-500 transition-colors"
          aria-label="Download CV"
        >
          CV
        </a>
        <a
          href="https://www.linkedin.com/in/omer-peled6/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/omerpeled6"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="http://discordapp.com/users/900307356322242560"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-purple-500"
          aria-label="Discord"
        >
          <FaDiscord />
        </a>
      </div>
    </nav>
  )
}
