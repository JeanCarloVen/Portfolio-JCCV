import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Code, Palette, Rocket, Gamepad2, AppWindowMac } from 'lucide-react';

const skills = [
  { icon: Gamepad2, title: 'Desarrollo Gaming', desc: 'C#, Unity' },
  { icon: AppWindowMac, title: 'BackEnd', desc: 'MongoDB, Express, Node, MySQL, PostgreSQL, ORM-Prisma' },
  { icon: Code, title: 'Desarrollo Web', desc: 'JS, TS, React, Next, Zustand, Tailwind, CSS' },
  { icon: Palette, title: 'Diseño UI/UX', desc: 'Figma, Adobe XD' },
  { icon: Rocket, title: 'Autenticación', desc: 'JWT, ZOD, Auth0' },
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="min-h-screen py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl mb-4 text-slate-900">Acerca de Mí</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Soy desarrollador con más de 3 años de experiencia creando 
            productos digitales.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-6 bg-slate-50 rounded-2xl hover:shadow-xl transition-shadow"
            >
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                <skill.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl mb-2 text-slate-900">{skill.title}</h3>
              <p className="text-slate-600">{skill.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
