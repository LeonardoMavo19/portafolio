import { motion } from 'framer-motion';
import { useState } from 'react';
import { ArrowDown, ArrowUp } from 'lucide-react';

export function About() {
  const [expanded, setExpanded] = useState(false);
  const gradientBg = "bg-gradient-to-r from-[#2C417A] to-[#4A67AF] hover:from-[#4A67AF] hover:to-[#8396C7]";

  const textoCorto = "Soy un apasionado desarrollador de software con formación en Ingeniería de Sistemas y una fuerte especialización en el desarrollo backend.";
  const textoCompleto = "Soy un apasionado desarrollador de software con formación en Ingeniería de Sistemas y una fuerte especialización en el desarrollo backend. Mi experiencia abarca la creación de soluciones robustas para entornos empresariales, el manejo avanzado de bases de datos y la aplicación de una lógica de programación sólida en lenguajes como JavaScript, PHP, Python, Ruby y Dart.\n\nMi trayectoria incluye una valiosa pasantía de cuatro meses en el departamento de STI de una empresa nacional, donde pude aplicar y expandir mis conocimientos en un entorno profesional. Además, cuento con tres años de experiencia en atención al cliente, lo que me ha permitido desarrollar excelentes habilidades de comunicación y una profunda comprensión de las necesidades del usuario final. Complemento mi perfil con un buen dominio del inglés, lo que me facilita colaborar en proyectos internacionales y mantenerme actualizado con las últimas tendencias tecnológicas.";

  return (
    <section id="sobre-mi" className="py-24 container mx-auto px-6 md:px-12">
      <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24">
        {/* Imagen con borde desplazado circular (Royal Blue) */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="w-full md:w-5/12 relative mt-10 md:mt-0 px-4 md:px-0 flex justify-center"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute inset-0 border-[6px] border-[#4A67AF] rounded-full translate-x-4 translate-y-4 md:translate-x-6 md:translate-y-6 z-0"
            ></motion.div>
            <motion.img 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              src="/src/assets/Foto.png" 
              alt="Perfil" 
              className="relative z-10 w-full h-full object-cover rounded-full shadow-2xl"
            />
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="w-full md:w-7/12"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-3xl md:text-4xl font-bold text-white uppercase mb-6"
          >
            Sobre Mí
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-[#8396C7] text-lg leading-relaxed mb-6"
          >
            {expanded ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {textoCompleto.split('\n\n').map((parrafo, idx) => (
                  <p key={idx} className="mb-4">{parrafo}</p>
                ))}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {textoCorto}
              </motion.div>
            )}
          </motion.div>

          {/* Botón Ver más */}
          <motion.button
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            whileHover={{ x: 8 }}
            onClick={() => setExpanded(!expanded)}
            className="inline-flex items-center text-white hover:text-[#4A67AF] transition-colors group mb-10 cursor-pointer"
          >
            {expanded ? (
              <>
                <ArrowUp className="w-5 h-5 mr-3 group-hover:-translate-y-1 transition-transform" />
                Ver menos
              </>
            ) : (
              <>
                <ArrowDown className="w-5 h-5 mr-3 group-hover:translate-y-1 transition-transform" />
                Ver más
              </>
            )}
          </motion.button>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <motion.a 
              href="https://wa.me/584146838825"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className={`px-10 py-3 rounded text-white font-bold uppercase tracking-wider shadow-lg cursor-pointer ${gradientBg}`}
            >
              Contrátame
            </motion.a>
            <motion.button 
              whileHover={{ scale: 1.05, borderColor: '#4A67AF' }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-3 rounded text-white font-bold uppercase tracking-wider border-2 border-[#2C417A] transition-colors"
            >
              Currículum
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
