// Importing icons and motion libraries
import { RiReactjsLine } from 'react-icons/ri' // React.js
import { TbBrandNextjs } from 'react-icons/tb' // Next.js
import { FaHtml5 } from 'react-icons/fa' // HTML5
import { FaCss3Alt } from 'react-icons/fa' // CSS3
import { RiTailwindCssFill } from 'react-icons/ri' // Tailwind CSS
import { SiMui } from 'react-icons/si' // Material UI
import { SiExpo } from 'react-icons/si' // Expo

// Backend
import { FaNodeJs } from 'react-icons/fa' // Node.js
import { FaNpm } from 'react-icons/fa' // NPM
import { SiExpress } from 'react-icons/si' // Express
import { SiJsonwebtokens } from 'react-icons/si' // JWT
import { SiSocketdotio } from 'react-icons/si' // Socket.io

// Database
import { SiMongodb } from 'react-icons/si' // MongoDB
import { BiLogoPostgresql } from 'react-icons/bi' // PostgreSQL
import { SiFirebase } from 'react-icons/si' // Firebase

// Languages
import { FaJs } from 'react-icons/fa' // JavaScript
import { BiLogoTypescript } from 'react-icons/bi' // TypeScript
import { FaPython } from 'react-icons/fa' // Python
import { FaJava } from 'react-icons/fa' // Java

import { motion } from 'framer-motion'

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: 'linear',
      repeat: Infinity,
      repeatType: 'reverse',
    },
  },
})

export default function Technologies() {
  const icons = [
    { component: RiReactjsLine, color: 'text-cyan-400', duration: 2.5 },
    { component: TbBrandNextjs, color: '', duration: 5 },
    { component: FaHtml5, color: 'text-orange-500', duration: 3 },
    { component: FaCss3Alt, color: 'text-blue-500', duration: 3.5 },
    { component: RiTailwindCssFill, color: 'text-blue-500', duration: 4 },
    { component: SiMui, color: 'text-blue-500', duration: 4.5 },
    { component: FaNodeJs, color: 'text-green-500', duration: 3 },
    { component: FaNpm, color: 'text-red-500', duration: 2.8 },
    { component: SiMongodb, color: 'text-green-500', duration: 3.3 },
    { component: BiLogoPostgresql, color: 'text-sky-700', duration: 4 },
    { component: FaJs, color: 'text-yellow-400', duration: 2.5 },
    { component: BiLogoTypescript, color: 'text-sky-700', duration: 3.7 },
    { component: FaPython, color: 'text-yellow-500', duration: 4.2 },
    { component: FaJava, color: 'text-sky-700', duration: 4.5 },
    { component: SiExpo, color: '', duration: 3.1 },
    { component: SiExpress, color: '', duration: 3.8 },
    { component: SiFirebase, color: 'text-red-700', duration: 4.3 },
    { component: SiJsonwebtokens, color: 'text-purple-700', duration: 2.9 },
    { component: SiSocketdotio, color: '', duration: 3.6 },
  ]

  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-start justify-center gap-4"
      >
        {icons.map((icon, index) => (
          <motion.div
            key={index}
            variants={iconVariants(icon.duration)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <icon.component className={`text-7xl ${icon.color}`} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
