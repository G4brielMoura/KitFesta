"use client"

import { motion, Variants } from "framer-motion"

const steps = [
  {
    step: "01",
    title: "Kit Festa Personalizado",
    description:
      "Desenvolvimento de kits completos criados a partir da sua ideia, com identidade visual exclusiva e atenção total aos detalhes.",
  },
  {
    step: "02",
    title: "Topos Decorativos",
    description:
      "Topos personalizados para bolos e doces, pensados para complementar o tema e valorizar a decoração da festa.",
  },
  {
    step: "03",
    title: "Painéis Temáticos",
    description:
      "Painéis decorativos personalizados que transformam o ambiente e criam cenários marcantes para fotos.",
  },
  {
    step: "04",
    title: "Caixas Personalizadas",
    description:
      "Caixas criativas e personalizadas para lembrancinhas, doces ou presentes, desenvolvidas sob medida.",
  },
  {
    step: "05",
    title: "Decorações Temáticas",
    description:
      "Criações completas baseadas em temas escolhidos, transformando ideias em experiências visuais únicas.",
  },
  {
    step: "06",
    title: "Datas Comemorativas",
    description:
      "Personalizados especiais para datas comemorativas, desenvolvidos com carinho para emocionar e surpreender.",
  },
]

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
}

export default function ProcessSection() {
  return (
    <section className="w-full flex justify-center px-4 sm:px-6 lg:px-12 py-30">
      {/* CONTAINER CENTRAL */}
      <div className="w-full max-w-6xl">
        <div className="bg-[black] rounded-3xl px-6 sm:px-10 lg:px-14 py-6">
          {/* HEADER */}
          <div className="flex flex-col lg:flex-row lg:items-center gap-6 mb-14">
            <div>
              <p className="text-xs uppercase tracking-widest text-white/60 mb-2">
                Nossos Serviços
              </p>

              <h2 className="text-3xl md:text-4xl font-semibold text-white leading-tight">
                Veja Com Atenção!
              </h2>
            </div>

            {/* LINHA */}
            <div className="hidden lg:block flex-1 h-px bg-white/20 mt-6 lg:mt-13" />
          </div>

          {/* CARDS */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="
              flex gap-4 overflow-x-auto snap-x snap-mandatory
              sm:grid sm:grid-cols-2
              lg:grid-cols-4
              sm:overflow-visible
              pb-4 mb-14
              scrollbar-hide
            "
          >
            {steps.map((item) => (
              <motion.div
                key={item.step}
                variants={cardVariants}
                className="
                  snap-center
                  min-w-[260px]
                  sm:min-w-0
                  bg-[#fff]
                  rounded-2xl
                  p-6
                  border
                  border-white/10
                  min-h-[220px]
                  flex
                  flex-col
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:shadow-2xl
                  hover:border-white/20
                "
              >
                <span className="text-sm text-black/40 font-medium mb-3">
                  {item.step}.
                </span>

                <h3 className="text-base font-semibold text-black mb-3">
                  {item.title}
                </h3>

                <p className="text-sm text-black/70 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* FOOTER */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            {/* AVATARES */}
            

            {/* CTA */}
            <a
              href="/portfolio"
              className="
                inline-flex
                items-center
                justify-center
                rounded-[14px]
                bg-white
                text-[black]
                px-6
                py-3
                text-sm
                font-semibold
                transition-all
                hover:scale-105
                hover:shadow-lg
              "
            >
              Ver Catalógo →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
