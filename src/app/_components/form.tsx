"use client"

import { useRef, useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaInstagram, FaTwitter, FaYoutube, FaEnvelope } from "react-icons/fa"
import { useInView } from "framer-motion"
import emailjs from "@emailjs/browser"

export default function FooterMy() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-20% 0px" })
  const formRef = useRef<HTMLFormElement>(null)

  // feedback state
  const [feedback, setFeedback] = useState<{
    message: string
    type: "success" | "error"
    visible: boolean
  }>({ message: "", type: "success", visible: false })

  
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (!formRef.current) return

    emailjs
      .sendForm(
        "#", // ← Substitua aqui
        "#", // ← Substitua aqui
        formRef.current,
        "#" // ← Substitua aqui
      )
      .then(() => {
        // sucesso
        setFeedback({
          message: "Seu e-mail foi enviado com sucesso.",
          type: "success",
          visible: true,
        })
        formRef.current?.reset()
      })
      .catch((error) => {
        console.error("Erro ao enviar:", error)
        setFeedback({
          message: "Ocorreu um erro ao enviar a mensagem.",
          type: "error",
          visible: true,
        })
      })
  }

  // auto-dismiss feedback depois de 5s
  useEffect(() => {
    if (feedback.visible) {
      const timer = setTimeout(() => {
        setFeedback((f) => ({ ...f, visible: false }))
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [feedback.visible])

  return (
    <motion.footer
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, ease: "easeOut" }}
      className="w-full px-6 py-40  bg-[#f2f3f5] text-[black] font-sans"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-start">
        {/* Left: Form */}
        <div className="space-y-8">
          <h2 className="text-5xl md:text-8xl font-black leading-tight text-[brack] ">
            Atendimento
          </h2>

          <form className="space-y-6" ref={formRef} onSubmit={handleSubmit}>
            <Input label="Digite seu nome." name="user_name" />
            <Input label="Seu melhor email." name="user_email" />
            <TextArea label="No que podemos te ajudar hoje?" name="message" />
            <div className="relative ">
              <motion.button
                className="bg-[black] hover:bg-[gray]/90 text-[#f5f5f5] hover:text-white px-6 py-3 mt-8 rounded-full transition-colors w-full sm:w-auto"
                type="submit"
              >
                Enviar
              </motion.button>

              {/* Feedback */}
              <div className="mt-3">
                <AnimatePresence>
                  {feedback.visible && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.5 }}
                      className={`text-sm ${
                        feedback.type === "success"
                          ? "text-[#0a3d62" // cor clara para sucesso (pode ajustar)
                          : "text-red-500"
                      }`}
                      aria-live="polite"
                    >
                      {feedback.message}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </form>
        </div>

        {/* Right: Socials */}
      </div>
    </motion.footer>
  )
}

// Reutilizáveis
function Input({ label, name }: { label: string; name: string }) {
  return (
    <div className="w-full">
      <label className="block text-sm md:text-base mb-2">{label}</label>
      <div className="border rounded-sm text-[#bfbfbf] group relative">
        <input
          name={name}
          required
          className="bg-white rounded-sm w-full outline-none pl-4 py-2 text-sm md:text-base placeholder:text-[#0a3d628b]"
          placeholder={label}
        />
        <motion.div className="absolute bottom-0 left-0 h-[2px] bg-white origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
      </div>
    </div>
  )
}

function TextArea({ label, name }: { label: string; name: string }) {
  return (
    <div className="w-full">
      <label className="block text-sm md:text-base mb-2">{label}</label>
      <div className="bg-white rounded-sm text-[#bfbfbf] group relative">
        <textarea
          name={name}
          rows={4}
          required
          className="bg-transparent w-full outline-none py-2 resize-none  pl-4 text-sm md:text-base placeholder:text-[#0a3d628b]"
          placeholder={label}
        />
        <motion.div className="absolute bottom-0 left-0 h-[2px] bg-white origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
      </div>
    </div>
  )
}
