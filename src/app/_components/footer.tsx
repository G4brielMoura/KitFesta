"use client"

import { motion } from "framer-motion"
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa"
import Image from "next/image"

const socialLinks = [
  {
    icon: <FaInstagram />,
    href: "https://www.instagram.com/gabrielmouradev",
    color: "#E1306C",
  },
  {
    icon: <FaLinkedin />,
    href: "https://www.linkedin.com/in/gabrielmouradev",
    color: "#1DA1F2",
  },
  {
    icon: <FaGithub />,
    href: "https://github.com/G4brielMoura",
    color: "#565555",
  },
]

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-[#e5e5e5] min-h-[320px] px-6 sm:px-12 flex items-center justify-center"
    >
      {/* Bloco central */}
      <div className="flex flex-col items-center justify-center text-center gap-8">
        {/* LOGO */}
        <Image
          src="svg/mainlogo.svg" // ajuste se necessário
          alt="GtapNG"
          width={160}
          height={48}
          className="object-contain"
          priority
        />

        {/* Redes Sociais */}
        <div className="flex gap-6">
          {socialLinks.map(({ icon, href, color }, index) => (
            <a
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black transition duration-300 hover:scale-110"
              onMouseEnter={(e) => (e.currentTarget.style.color = color)}
              onMouseLeave={(e) => (e.currentTarget.style.color = "black")}
              aria-label={`Link para ${href}`}
            >
              <div className="text-xl">{icon}</div>
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-sm pr-2 text-[black] font-normal">© 2025</p>
      </div>
    </motion.footer>
  )
}
