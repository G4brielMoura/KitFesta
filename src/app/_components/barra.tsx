"use client"

import { motion } from "framer-motion"

const messages = [
  "Decoração de Aniversário",
  "Papelaria Personalizada",
  "Lembrancinhas Criativas",
  "Convites Exclusivos",
  "Personalizados para Festas",
  "Detalhes que Encantam",
  "Transformando Momentos em Memórias",
]

export default function Barra() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed bottom-0 left-0 w-full z-50 overflow-hidden"
    >
      {/* APENAS 1 from / 1 via / 1 to */}
      <div className="h-8 bg-[black] ">
        <motion.div
          className="flex items-center gap-14 h-full whitespace-nowrap px-10 text-sm tracking-wide font-light text-[#fff]"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 24,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {[...messages, ...messages].map((text, index) => (
            <span key={index}>{text}</span>
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
}
