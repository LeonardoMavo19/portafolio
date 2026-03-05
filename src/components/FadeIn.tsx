import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface FadeInProps {
  children: ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale' | 'none';
  delay?: number;
  duration?: number;
  className?: string;
}

export function FadeIn({ 
  children, 
  direction = 'up', 
  delay = 0, 
  duration = 0.6,
  className = ''
}: FadeInProps) {
  const variants = {
    up: { y: 40, x: 0, scale: 1 },
    down: { y: -40, x: 0, scale: 1 },
    left: { x: 40, y: 0, scale: 1 },
    right: { x: -40, y: 0, scale: 1 },
    scale: { x: 0, y: 0, scale: 0.9 },
    none: { x: 0, y: 0, scale: 1 },
  };

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...variants[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

// Variante adicional para animaciones de stagger en grupos
export function FadeInStagger({ 
  children, 
  delay = 0.1,
  className = ''
}: { 
  children: ReactNode; 
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
