"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"


type CaseData = {
  title: string
  description: string
  tag: string
  images: string[]
  link?: string
  techs?: string[]
  pronto?: boolean
}

type CaseProps = CaseData & {
  reverse: boolean
  pronto: boolean
}

const cases: CaseData[] = [
  {
    title: "Topos Personalizados",
    description:
      "Criamos topos personalizados com design profissional e acabamento cuidadoso. Transformamos suas ideias em peças únicas que valorizam cada celebração.",
    tag: "Portfólio Profissional",
    images: [
      "/project/1.svg",
      "/project/2.svg",
      "/project/3.svg",
      "/project/4.svg",
      "/project/5.svg",
      "/project/6.svg",
    ],

    pronto: true,
  },
]

export default function Portfolio() {
  return (
    <AnimatePresence>
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
        className="w-full bg-[#fff] text-[black] px-6 
             pt-24 sm:pt-20 md:pt-45 py-10"
      >
        <div className="max-w-screen-xl select-none mx-auto flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full flex flex-col md:flex-row justify-between items-center "
          ></motion.div>

          <div className="flex flex-col gap-32 w-full">
            {cases.map((item, index) => (
              <CaseComponent
                key={index}
                {...item}
                reverse={index % 2 !== 0}
                pronto={item.pronto ?? true}
              />
            ))}
          </div>
        </div>
      </motion.section>
    </AnimatePresence>
  )
}

function CaseComponent({
  title,
  description,
  images,
  reverse,
  link,
  pronto,
}: CaseProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [images.length])

  

  return (
    <motion.div
      initial={{ opacity: 0, x: reverse ? 100 : -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className={`flex flex-col md:flex-row items-center gap-8 h-auto ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      <div className="relative w-full  md:w-1/2 h-auto aspect-square md:aspect-auto md:h-[60vh] overflow-hidden rounded-4xl">
        {images.map((src, idx) => (
          <motion.div
            key={idx}
            className="absolute inset-0 w-full h-full"
            animate={{ opacity: currentIndex === idx ? 1 : 0 }}
            transition={{ duration: 1 }}
          >
            <Image
              src={src}
              alt={`Slide ${idx}`}
              fill
              className="object-cover rounded-4xl"
              priority={idx === 0}
            />
          </motion.div>
        ))}

        <button
          onClick={() =>
            setCurrentIndex(
              (prev) => (prev - 1 + images.length) % images.length
            )
          }
          className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-3xl z-10"
        >
          ‹
        </button>

        <button
          onClick={() => setCurrentIndex((prev) => (prev + 1) % images.length)}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-3xl z-10"
        >
          ›
        </button>
      </div>

      <div className="w-full md:w-1/2 flex flex-col justify-center h-full">
        <h2 className="text-[4vw] tracking-wide leading-none">{title}</h2>
        <p className="text-gray-400 text-lg leading-relaxed tracking-wide py-2">
          {description}
        </p>

        

      </div>
    </motion.div>
  )
}
