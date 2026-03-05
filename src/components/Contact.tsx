import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const gradientBg = "bg-gradient-to-r from-[#2C417A] to-[#4A67AF] hover:from-[#4A67AF] hover:to-[#8396C7]";
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState('submitting');
    
    const form = e.currentTarget;
    const data = new FormData(form);
    
    try {
      const response = await fetch('https://formspree.io/f/mojkakzz', {
        method: 'POST',
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setFormState('success');
        form.reset();
      } else {
        setFormState('error');
      }
    } catch (error) {
      setFormState('error');
    }
  };

  return (
    <section id="contacto" className="relative mt-20">
      {/* Fondo decorativo superior con gradiente (simulando la curva) */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#1B2647] to-[#060913] z-0"
        style={{ borderTopLeftRadius: '50% 10%', borderTopRightRadius: '50% 10%' }}
      ></motion.div>
      
      <div className="container mx-auto px-6 md:px-12 py-24 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-white uppercase text-center mb-16"
        >
          Contacto
        </motion.h2>
        
        <div className="flex flex-col lg:flex-row gap-16 max-w-6xl mx-auto">
          {/* Info de contacto */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="w-full lg:w-5/12"
          >
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-2xl font-bold text-white mb-6"
            >
              Envíame un Mensaje
            </motion.h3>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-[#8396C7] mb-10 leading-relaxed"
            >
              ¿Tienes algún proyecto en mente o quieres trabajar conmigo? No dudes en contactarme. Estoy disponible para discutir nuevas oportunidades y colaboraciones.
            </motion.p>
            
            <div className="space-y-6">
              {[
                { icon: Phone, text: '+58 (414) 683-8825', delay: 0.4 },
                { icon: Mail, text: '03leonardomavo03@gmail.com', delay: 0.5 },
                { icon: MapPin, text: 'Punto Fijo, Estado Falcón, Venezuela', delay: 0.6, multiline: true }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: item.delay }}
                  className="flex items-center"
                >
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    className="w-12 h-12 bg-[#2C417A] rounded-full flex items-center justify-center mr-6 border border-[#4A67AF]"
                  >
                    <item.icon className="w-5 h-5 text-white" />
                  </motion.div>
                  <span className="text-[#8396C7]">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Formulario */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="w-full lg:w-7/12 bg-[#1B2647] backdrop-blur-sm border border-[#2C417A] p-8 md:p-10 rounded-2xl shadow-2xl"
          >
            {formState === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">¡Mensaje Enviado!</h3>
                <p className="text-[#8396C7] mb-6">Gracias por contactarme. Te responderé pronto.</p>
                <button
                  onClick={() => setFormState('idle')}
                  className={`px-6 py-3 rounded text-white font-bold uppercase tracking-wider ${gradientBg}`}
                >
                  Enviar otro mensaje
                </button>
              </motion.div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <input 
                    type="text" 
                    name="name"
                    placeholder="Nombre" 
                    required
                    className="w-full bg-[#060913] border border-[#2C417A] rounded-lg px-5 py-4 text-white placeholder-[#5F6D91] focus:outline-none focus:border-[#4A67AF] focus:ring-1 focus:ring-[#4A67AF] transition-all"
                  />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <input 
                    type="email" 
                    name="email"
                    placeholder="Correo Electrónico" 
                    required
                    className="w-full bg-[#060913] border border-[#2C417A] rounded-lg px-5 py-4 text-white placeholder-[#5F6D91] focus:outline-none focus:border-[#4A67AF] focus:ring-1 focus:ring-[#4A67AF] transition-all"
                  />
                </motion.div>
                
                <motion.textarea 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  name="message"
                  placeholder="Mensaje" 
                  required
                  rows={4}
                  className="w-full bg-[#060913] border border-[#2C417A] rounded-lg px-5 py-4 text-white placeholder-[#5F6D91] focus:outline-none focus:border-[#4A67AF] focus:ring-1 focus:ring-[#4A67AF] transition-all resize-none"
                ></motion.textarea>
                
                {formState === 'error' && (
                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-red-400 text-sm"
                  >
                    Hubo un error al enviar el mensaje. Por favor intenta nuevamente.
                  </motion.p>
                )}
                
                <motion.button 
                  type="submit"
                  disabled={formState === 'submitting'}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  whileHover={formState !== 'submitting' ? { scale: 1.02 } : {}}
                  whileTap={formState !== 'submitting' ? { scale: 0.98 } : {}}
                  className={`px-12 py-4 rounded-lg text-white font-bold uppercase tracking-wider shadow-lg shadow-[#4A67AF]/20 flex items-center justify-center gap-2 ${gradientBg} ${formState === 'submitting' ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  <Send className="w-5 h-5" />
                  {formState === 'submitting' ? 'Enviando...' : 'Enviar'}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 border-t border-[#1B2647] mt-10">
        <div className="container mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-white tracking-tighter flex items-center"
          >
            <span className="text-[#4A67AF] mr-2">Ing.</span> Leonardo Mavo
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[#5F6D91] text-sm"
          >
            2026 - Leonardo Mavo. Todos los derechos reservados
          </motion.p>
        </div>
      </footer>
    </section>
  );
}

