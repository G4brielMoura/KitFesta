"use client"

import { motion, AnimatePresence, useInView } from "framer-motion"
import { useEffect, useRef, useState } from "react"

export function Main() {
  const ref = useRef(null)
  const isInView = useInView(ref, {
    once: false,
    margin: "-20% 0px -20% 0px",
  })

  const texts = ["Decoração", "Temáticos", "Criativos"]
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section
      ref={ref}
      className="min-h-screen flex flex-col items-center justify-center pb-20 px-3 text-center bg-[#fff] text-[black] select-none"
    >
      <AnimatePresence mode="wait">
        {isInView && (
          <motion.div
            key="main-content"
            initial={{ opacity: 0, y: 80, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 60, scale: 0.96 }}
            transition={{
              duration: 1.2,
              ease: [0.65, 0, 0.35, 1],
            }}
            className="flex flex-col items-center justify-center w-full"
          >
            {/* LOGO INTERATIVA */}
            <motion.div
              className="mb-4 flex items-center justify-center"
              style={{ perspective: 1000 }}
              whileHover={{
                rotateX: 8,
                rotateY: -8,
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.97,
                rotateX: -6,
                rotateY: 6,
              }}
              drag
              dragElastic={0.25}
              dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
              whileDrag={{
                rotateX: 10,
                rotateY: -10,
              }}
              transition={{
                type: "spring",
                stiffness: 180,
                damping: 18,
              }}
            >
              <img
                src="svg/mainlogo.svg"
                alt="Logo Mimos Studio"
                className="w-[clamp(220px,80vw,700px)] pointer-events-none"
                draggable={false}
              />
            </motion.div>

            {/* TEXTO DINÂMICO */}
            <h2 className="mb-3 leading-none text-[clamp(1.5rem,4vw,2.5rem)] font-medium">
              Personalizados{" "}
              <span className="text-gray-400 inline-block min-w-[1px]">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={texts[index]}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                  >
                    {texts[index]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </h2>

            {/* DESCRIÇÃO */}
            <p className="text-[clamp(1rem,2.5vw,2rem)] max-w-[900px] text-gray-400 tracking-tight leading-tight font-light text-center mb-6">
              Na Mimos Studio, transformamos suas ideias em realidade por meio
              de criações únicas e personalizadas. Trabalhamos com kits,
              papelaria criativa e detalhes decorativos que tornam cada momento
              inesquecível.
            </p>

            {/* BOTÃO */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 items-center justify-center">
              <AnimatedButton href="/login">Fale Conosco</AnimatedButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default function AnimatedButton({
  children,
  href,
  download = false,
}: {
  children: React.ReactNode
  href: string
  download?: boolean
}) {
  return (
    <motion.a
      whileHover="hover"
      initial="initial"
      href={href}
      download={download}
      target={download ? "_blank" : undefined}
      rel={download ? "noopener noreferrer" : undefined}
      className="relative group inline-block px-8 py-3 border border-[black]/20 backdrop-blur-lg text-[black] uppercase tracking-wide text-sm sm:text-base rounded-full overflow-hidden transition-all duration-300"
    >
      {/* FUNDO ANIMADO */}
      <motion.span
        className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 opacity-30 group-hover:opacity-80 blur-md rounded-full scale-0 group-hover:scale-150"
        variants={{
          initial: { scale: 0, opacity: 0 },
          hover: { scale: 2.5, opacity: 0.6 },
        }}
        transition={{ duration: 0.6 }}
        style={{ zIndex: 0 }}
      />

      {/* TEXTO */}
      <span className="relative z-10 font-semibold">{children}</span>
    </motion.a>
  )
}
