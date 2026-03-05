import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { scrollToSection } from '../hooks/useScroll';

interface NavbarProps {
  scrolled: boolean;
}

export function Navbar({ scrolled }: NavbarProps) {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const gradientBg = "bg-gradient-to-r from-[#2C417A] to-[#4A67AF] hover:from-[#4A67AF] hover:to-[#8396C7]";

  const handleScrollTo = (id: string) => {
    setMenuAbierto(false);
    scrollToSection(id);
  };

  const navLinks = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'sobre-mi', label: 'Sobre Mí' },
    { id: 'portafolio', label: 'Portafolio' },
    { id: 'servicios', label: 'Servicios' },
    { id: 'experiencia', label: 'Experiencia' },
    { id: 'contacto', label: 'Contacto', isButton: true }
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#060913]/95 backdrop-blur-md shadow-lg py-4 border-b border-[#1B2647]' : 'bg-transparent py-6'}`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link to="/" className="text-xl md:text-2xl font-bold text-white tracking-tighter flex items-center">
          <span className="text-[#4A67AF] mr-2">Ing.</span> Leonardo Mavo
        </Link>

        <div className="hidden md:flex space-x-8 items-center text-sm font-medium uppercase tracking-wider text-white">
          {navLinks.map((link) => (
            link.isButton ? (
              <motion.button
                key={link.id}
                onClick={() => handleScrollTo(link.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-2.5 rounded-full text-white ${gradientBg} transition-all`}
              >
                {link.label}
              </motion.button>
            ) : (
              <motion.button
                key={link.id}
                onClick={() => handleScrollTo(link.id)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="hover:text-[#8396C7] transition-colors"
              >
                {link.label}
              </motion.button>
            )
          ))}
        </div>

        <button className="md:hidden text-white" onClick={() => setMenuAbierto(!menuAbierto)}>
          {menuAbierto ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuAbierto && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-full left-0 w-full bg-[#1B2647] shadow-xl py-6 flex flex-col items-center space-y-6 uppercase text-sm font-bold text-white border-b border-[#2C417A]"
          >
            {navLinks.map((link) => (
              link.isButton ? (
                <motion.button
                  key={link.id}
                  onClick={() => handleScrollTo(link.id)}
                  whileTap={{ scale: 0.95 }}
                  className={`px-8 py-3 rounded-full text-white ${gradientBg}`}
                >
                  {link.label}
                </motion.button>
              ) : (
                <motion.button
                  key={link.id}
                  onClick={() => handleScrollTo(link.id)}
                  whileTap={{ scale: 0.95 }}
                  className="w-full hover:text-[#8396C7]"
                >
                  {link.label}
                </motion.button>
              )
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
