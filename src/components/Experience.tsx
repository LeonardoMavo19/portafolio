import { motion } from 'framer-motion';
import type { Habilidad } from '../types';

interface ExperienceProps {
  habilidades: Habilidad[];
}

export function Experience({ habilidades }: ExperienceProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1 
    }
  };

  return (
    <section id="experiencia" className="py-24 container mx-auto px-6 md:px-12">
      <motion.h2 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-white uppercase text-center mb-20"
      >
        Experiencia
      </motion.h2>
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-y-12 gap-x-6 max-w-6xl mx-auto text-center"
      >
        {habilidades.map((hab, idx) => (
          <motion.div 
            key={idx}
            variants={itemVariants}
            whileHover={{ scale: 1.1, y: -8 }}
            whileTap={{ scale: 0.95 }}
            className="flex flex-col items-center group cursor-pointer"
          >
            <motion.div 
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="mb-4 transform group-hover:-translate-y-2 transition-transform duration-300"
            >
              {hab.icono}
            </motion.div>
            <p className="text-sm md:text-base font-medium text-[#8396C7] group-hover:text-white transition-colors">{hab.nombre}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
