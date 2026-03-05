import type { Servicio } from '../types';
import { Smartphone, Monitor, Code, Palette } from 'lucide-react';

export const SERVICIOS: Servicio[] = [
  {
    icono: <Smartphone className="w-8 h-8 text-[#8396C7]" />,
    titulo: "DESARROLLO MÓVIL",
    descripcion: "Creación de aplicaciones móviles nativas y multiplataforma utilizando tecnologías modernas como React Native y Flutter. Desarrollo de interfaces de usuario responsivas y experiencias de usuario fluidas."
  },
  {
    icono: <Monitor className="w-8 h-8 text-[#8396C7]" />,
    titulo: "DESARROLLO WEB",
    descripcion: "Desarrollo de aplicaciones web completas tanto en el frontend como en el backend. Creación de sistemas de gestión, portales empresariales y soluciones personalizadas."
  },
  {
    icono: <Code className="w-8 h-8 text-[#8396C7]" />,
    titulo: "PROGRAMACIÓN",
    descripcion: "Desarrollo de soluciones de software personalizadas utilizando múltiples lenguajes de programación como JavaScript, PHP, Python, Ruby y Dart. Resolución de problemas complejos con código eficiente."
  },
  {
    icono: <Palette className="w-8 h-8 text-[#8396C7]" />,
    titulo: "DISEÑOS EN GENERAL",
    descripcion: "Creación de identidades visuales completas incluyendo logotipos, manuales de marca, diseño de tarjetas de presentación, folletos y material publicitario. Servicios de diseño gráfico para fortalecer la imagen de tu empresa."
  }
];
