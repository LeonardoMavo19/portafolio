import { motion } from 'framer-motion';
import type { Servicio } from '../types';

interface ServicesProps {
  servicios: Servicio[];
}

export function Services({ servicios }: ServicesProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5 } 
    }
  };

  return (
    <section id="servicios" className="py-24 container mx-auto px-6 md:px-12">
      <motion.h2 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-white uppercase text-center mb-16"
      >
        Servicios
      </motion.h2>
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto"
      >
        {servicios.map((servicio, idx) => (
          <motion.div 
            key={idx}
            variants={itemVariants}
            whileHover={{ y: -5, transition: { duration: 0.3 } }}
            className="bg-[#1B2647] border border-[#2C417A] p-10 rounded-2xl relative group hover:border-[#4A67AF] hover:shadow-[0_0_30px_rgba(74,103,175,0.15)] transition-all duration-500"
          >
            {/* Resplandor superior en la tarjeta */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-transparent via-[#4A67AF] to-transparent"
            />
            
            <div className="flex flex-col md:flex-row items-start md:items-center mb-6">
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-[#2C417A] p-4 rounded-xl mb-4 md:mb-0 md:mr-6 shadow-inner"
              >
                {servicio.icono}
              </motion.div>
              <h3 className="text-xl font-bold text-white uppercase">{servicio.titulo}</h3>
            </div>
            <p className="text-[#8396C7] leading-relaxed text-sm md:text-base">
              {servicio.descripcion}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
