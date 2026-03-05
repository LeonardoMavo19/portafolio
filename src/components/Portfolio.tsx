import { motion } from 'framer-motion';
import { useState } from 'react';
import { ArrowRight, ArrowDown, ArrowUp } from 'lucide-react';
import type { Proyecto } from '../types';

interface PortfolioProps {
  proyectos: Proyecto[];
}

export function Portfolio({ proyectos }: PortfolioProps) {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);
  const gradientText = "text-transparent bg-clip-text bg-gradient-to-r from-[#4A67AF] to-[#8396C7]";
  const gradientBg = "bg-gradient-to-r from-[#2C417A] to-[#4A67AF] hover:from-[#4A67AF] hover:to-[#8396C7]";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const toggleExpand = (idx: number) => {
    setExpandedProject(expandedProject === idx ? null : idx);
  };

  return (
    <section id="portafolio" className="py-24">
      <div className="container mx-auto px-6 md:px-12">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-white uppercase text-center mb-16"
        >
          Portafolio
        </motion.h2>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-32"
        >
          {proyectos.map((proyecto, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              className={`flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 md:gap-20`}
            >
              {/* Texto del Proyecto */}
              <div className="w-full md:w-5/12">
                <motion.p 
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className={`text-sm font-bold uppercase tracking-widest mb-2 ${gradientText}`}
                >
                  Proyecto {idx + 1}
                </motion.p>
                <motion.h3 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-2xl md:text-3xl font-bold text-white mb-6"
                >
                  {proyecto.titulo}
                </motion.h3>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-[#8396C7] leading-relaxed mb-4"
                >
                  {proyecto.descripcion}
                </motion.p>
                
                {/* Descripción extendida - Proyecto 1 (SAGIF) */}
                {expandedProject === idx && idx === 0 && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-[#8396C7] leading-relaxed mb-4"
                  >
                    <p className="mb-4">
                      Este sistema permite el registro y seguimiento completo de activos fijos de una organización, incluyendo:
                    </p>
                    <ul className="list-disc list-inside mb-4 space-y-2">
                      <li>Gestión de fichas de activos con información detallada</li>
                      <li>Control de ubicación y responsable de cada activo</li>
                      <li>Historial de mantenimiento y depreciación</li>
                      <li>Reportes personalizados y exportación de datos</li>
                    </ul>
                  </motion.div>
                )}

                {/* Descripción extendida - Proyecto 2 (Vento) */}
                {expandedProject === idx && idx === 1 && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-[#8396C7] leading-relaxed mb-4"
                  >
                    <p className="mb-4">
                      Sistema completo de gestión empresarial que permite controlar inventarios y generar facturas de manera eficiente:
                    </p>
                    <ul className="list-disc list-inside mb-4 space-y-2">
                      <li>Control de inventario en tiempo real</li>
                      <li>Gestión de productos y categorías</li>
                      <li>Registro de entradas y salidas de mercancía</li>
                      <li>Generación de facturas electrónicas</li>
                      <li>Reportes de ventas y stock</li>
                      <li>Control de proveedores y clientes</li>
                    </ul>
                  </motion.div>
                )}

                {/* Descripción extendida - Proyecto 3 (La Carte) - En desarrollo */}
                {expandedProject === idx && idx === 2 && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-[#8396C7] leading-relaxed mb-4"
                  >
                    <p className="mb-4">
                      Aplicación móvil en desarrollo que revolucionará la experiencia de los clientes en restaurantes:
                    </p>
                    <ul className="list-disc list-inside mb-4 space-y-2">
                      <li>Menús digitales interactivos con imágenes y descripciones</li>
                      <li>Sistema de recomendaciones personalizadas basadas en preferencias</li>
                      <li>Integración con pedidos desde la mesa</li>
                      <li>Información nutricional de cada platillo</li>
                      <li>Actualización en tiempo real del menú para restaurantes</li>
                    </ul>
                    <p className="mb-4">
                      <span className="inline-block px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-sm font-semibold">
                        En Desarrollo
                      </span>
                    </p>
                  </motion.div>
                )}

                <motion.button
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  whileHover={{ x: 8 }}
                  onClick={() => (idx === 0 || idx === 1 || idx === 2) ? toggleExpand(idx) : undefined}
                  className="inline-flex items-center text-white hover:text-[#4A67AF] transition-colors group cursor-pointer"
                >
                  {(idx === 0 || idx === 1 || idx === 2) ? (
                    expandedProject === idx ? (
                      <>
                        <ArrowUp className="w-5 h-5 mr-3 group-hover:-translate-y-1 transition-transform" />
                        Ver menos
                      </>
                    ) : (
                      <>
                        <ArrowDown className="w-5 h-5 mr-3 group-hover:translate-y-1 transition-transform" />
                        Ver más
                      </>
                    )
                  ) : (
                    <>
                      <ArrowRight className="w-5 h-5 mr-3 group-hover:translate-x-2 transition-transform" />
                      Leer más
                    </>
                  )}
                </motion.button>
              </div>

              {/* Imagen del Proyecto */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="w-full md:w-7/12 relative mt-8 md:mt-0 px-4 md:px-0"
              >
                {/* Borde desplazado dinámico (Royal Blue) */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className={`absolute inset-0 border-[4px] border-[#4A67AF] z-0 ${idx % 2 === 0 ? 'translate-x-6 translate-y-6' : '-translate-x-6 translate-y-6'}`}
                ></motion.div>
                
                {/* Proyecto 3 (La Carte) - Estilo de teléfono */}
                {idx === 2 ? (
                  <div className="relative w-48 h-96 mx-auto bg-[#1B2647] rounded-[2rem] border-4 border-[#4A67AF] shadow-2xl overflow-hidden">
                    {/* Notch del teléfono */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-[#1B2647] rounded-b-xl z-20"></div>
                    <img 
                      src={proyecto.imagen} 
                      alt={proyecto.titulo} 
                      className="relative z-10 w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  /* Proyectos 1 y 2 - Imagen completa */
                  <div className="relative w-full h-64 md:h-80 overflow-hidden bg-[#1B2647] flex items-center justify-center">
                    <img 
                      src={proyecto.imagen} 
                      alt={proyecto.titulo} 
                      className="relative z-10 max-w-full max-h-full object-contain shadow-2xl"
                    />
                  </div>
                )}
              </motion.div>

            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-24 text-center"
        >
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className={`px-12 py-3 rounded text-white font-bold uppercase tracking-wider shadow-lg ${gradientBg}`}
          >
            Ver Todos
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
