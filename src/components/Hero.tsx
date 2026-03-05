import { motion } from 'framer-motion';
import { scrollToSection } from '../hooks/useScroll';

export function Hero() {
  const gradientBg = "bg-gradient-to-r from-[#2C417A] to-[#4A67AF] hover:from-[#4A67AF] hover:to-[#8396C7]";

  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Marca de agua gigante en el fondo usando Deep Blue */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.4, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute top-32 right-[-5%] text-[8rem] md:text-[16rem] font-black text-[#1B2647]/40 select-none z-0 leading-none tracking-tighter"
      >
        DEVELOPER
      </motion.div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.p 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl text-[#8396C7] mb-2 font-medium"
        >
          Soy un
        </motion.p>
        
        <div className="overflow-hidden">
          <motion.h1 
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.1] mb-2 uppercase font-serif"
          >
            Back-end<br/>
            Software<br/>
            Developer<span className="text-[#4A67AF]">.</span>
          </motion.h1>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <button 
            onClick={() => scrollToSection('portafolio')} 
            className={`px-8 py-4 rounded text-white font-bold uppercase tracking-wider shadow-lg shadow-[#4A67AF]/20 hover:shadow-xl hover:shadow-[#4A67AF]/30 transform hover:scale-105 transition-all ${gradientBg}`}
          >
            Proyectos Previos
          </button>
          
        </motion.div>
      </div>
    </section>
  );
}
