import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

const projects = [
  {
    title: "Thinkerian",
    category: "Desarrollo Gaming",
    image:
      "https://images.unsplash.com/photo-1648260296289-ab882814a005?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjBwcm9qZWN0fGVufDF8fHx8MTc2NjgwNzYwMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description:
      "Aplicación móvil de tipo videojuego en linea para plataformas IOS, Android",
    link: ""
  },
  {
    title: "Bizkit",
    category: "Desarrollo Gaming",
    image:
      "https://images.unsplash.com/photo-1605108222700-0d605d9ebafe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzY2NzYzMzEwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "App de tipo videojuego para plataformas IOS y Android",
    link: ""
  },
  {
    title: "Sitio Web de Matrimonio",
    category: "Desarrollo Web",
    image:
      "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Web de invitación, indicaciones y confirmaciones al evento de matrimonio",
    link: "https://clauyjeanjuntos.com/"
  },
  {
    title: "Charly Holmes",
    category: "Desarrollo Web",
    image:
      "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Sitio dedicado a compra y venta de bienes raices",
    link: ""
  },
  {
    title: "Hausi",
    category: "Desarrollo Web",
    image:
      "https://plus.unsplash.com/premium_photo-1713025517597-4776eecf7977?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Sitio enfocado a la adquisión de servicios de visualización de inmuebles en 3D",
    link: ""
  },
  {
    title: "Planificador de Presupuestos",
    category: "Desarrollo Web",
    image:
      "https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "App que permite planificar el presupuesto de consumo a lo largo de cierto periodo",
    link: "https://feedsbudget.netlify.app/"
  },
  {
    title: "Fresh Coffee",
    category: "Desarrollo Web",
    image:
      "https://images.unsplash.com/photo-1557955776-857434f1c951?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "ERP sencillo para el área de cocina el cuál permite dar seguimiento a comandas",
    link: "https://quisco-next-app-router-seven.vercel.app/"
  },
  {
    title: "Tienda de Guitarras",
    category: "Desarrollo Web",
    image:
      "https://images.unsplash.com/photo-1686421402964-24b6d8247dff?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Sitio Web enfocado en venta de guitarras",
    link: ""
  },
  {
    title: "Calorie Tracking",
    category: "Desarrollo Web",
    image:
      "https://images.unsplash.com/photo-1527933053326-89d1746b76b9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "App que permite cuantificar las calorias perdidas",
    link: "https://calorietk.netlify.app/"
  },
  {
    title: "Calculadora de Consumo y Propinas",
    category: "Desarrollo Web",
    image:
      "https://images.unsplash.com/photo-1556742212-5b321f3c261b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "App sencilla destinada al uso dentro de un Restaurante",
    link: "https://thefasttipcalculator.netlify.app/"
  },
  {
    title: "DrinksIA",
    category: "Desarrollo Web",
    image:
      "https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=1257&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Sitio desarrollado para proporcionar recetas de distintos tipos de bebidas con integración IA",
    link: "https://bartend.netlify.app/"
  },
  {
    title: "UpTask",
    category: "Desarrollo Web",
    image:
      "https://images.unsplash.com/photo-1590402494562-4b788beb429e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Gestor de actividades a través del uso de Kanban",
    link: "https://uptask-frontend-react-r-dom-zod-rea.vercel.app/auth/login"
  },
  // {
  //   title: "Management Products",
  //   category: "Desarrollo Web",
  //   image:
  //     "https://plus.unsplash.com/premium_photo-1750052232411-c641a7b518ce?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   description:
  //     "App de administración de productos en almacén",
  //   link: ""
  // },
  {
    title: "The Cripto App",
    category: "Desarrollo Web",
    image:
      "https://images.unsplash.com/photo-1642403711604-3908e90960ce?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Cotizador de criptomonedas en tiempo real",
    link: "https://thecriptoapp.netlify.app/"
  },
  {
    title: "WeatherApp",
    category: "Desarrollo Web",
    image:
      "https://images.unsplash.com/photo-1707396173411-ce001d65c3cb?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "App que permite obtener el estado del clima de acuerdo a una ciudad en el mundo",
    link: ""
  },
  {
    title: "Administrador de Paciente",
    category: "Desarrollo Web",
    image:
      "https://plus.unsplash.com/premium_photo-1681996543579-b24cd01d4516?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Administrador de Pacientes para clínica médica",
    link: ""
  },
];

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="projects" ref={ref} className="min-h-screen py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl mb-4 text-slate-900">Proyectos Destacados</h2>
          <p className="text-xl text-slate-600">
            Algunos de mis trabajos más recientes y emocionantes
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={
                isInView
                  ? { opacity: 1, y: 0, scale: 1 }
                  : { opacity: 0, y: 50, scale: 0.9 }
              }
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
            >
              <a href={project.link} target="blank" >
                <div className="relative h-64 overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  />
                  <div className="absolute top-4 right-4 px-4 py-2 bg-purple-600 text-white rounded-full text-sm">
                    {project.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl mb-2 text-slate-900">
                    {project.title}
                  </h3>
                  <p className="text-slate-600">{project.description}</p>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
