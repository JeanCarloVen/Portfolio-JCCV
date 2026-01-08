import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const socialLinks = [
    { icon: Mail, label: 'Email', href: 'mailto:contacto@ejemplo.com' },
    { icon: Github, label: 'GitHub', href: 'https://github.com' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com' },
  ];

  return (
    <section id="contact" ref={ref} className="min-h-screen py-20 bg-gradient-to-br from-purple-900 via-slate-900 to-slate-900 text-white flex items-center">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl mb-4">Trabajemos Juntos</h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            ¿Tienes un proyecto en mente? Me encantaría escuchar sobre él y ayudarte a hacerlo realidad.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto bg-slate-800/50 backdrop-blur-sm rounded-3xl p-8 md:p-12"
        >
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block mb-2 text-sm text-slate-300">
                Nombre
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg focus:outline-none focus:border-purple-500 transition-colors"
                placeholder="Tu nombre"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm text-slate-300">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg focus:outline-none focus:border-purple-500 transition-colors"
                placeholder="tu@email.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2 text-sm text-slate-300">
                Mensaje
              </label>
              <textarea
                id="message"
                rows={6}
                className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg focus:outline-none focus:border-purple-500 transition-colors resize-none"
                placeholder="Cuéntame sobre tu proyecto..."
              />
            </div>
            <button
              type="submit"
              className="w-full py-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
            >
              Enviar Mensaje
            </button>
          </form>

          <div className="flex justify-center gap-6 mt-8 pt-8 border-t border-slate-700">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 bg-slate-700 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors"
                aria-label={link.label}
              >
                <link.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12 text-slate-400"
        >
          <p>© 2025 Mi Portafolio. Todos los derechos reservados.</p>
        </motion.div>
      </div>
    </section>
  );
}
