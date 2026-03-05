import { useParams, Link } from 'react-router-dom';
import { PROYECTOS } from '../data';
import { ArrowLeft } from 'lucide-react';

export function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const proyecto = PROYECTOS.find(p => p.id === id);

  if (!proyecto) {
    return (
      <div className="min-h-screen bg-[#060913] text-[#8396C7] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Proyecto no encontrado</h1>
          <Link to="/" className="text-[#4ade80] hover:underline">
            Volver al inicio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#060913] text-[#8396C7] py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-[#4ade80] hover:underline mb-8"
        >
          <ArrowLeft size={20} />
          Volver al portafolio
        </Link>
        
        <img 
          src={proyecto.imagen} 
          alt={proyecto.titulo}
          className="w-full h-96 object-cover rounded-lg mb-8"
        />
        
        <h1 className="text-4xl font-bold text-white mb-4">{proyecto.titulo}</h1>
        
        <p className="text-lg leading-relaxed mb-8">{proyecto.descripcion}</p>
        
        <div className="flex gap-4">
          <a 
            href={proyecto.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-6 py-3 bg-[#4ade80] text-[#060913] font-semibold rounded-lg hover:bg-[#22c55e] transition-colors"
          >
            Ver Proyecto
          </a>
        </div>
      </div>
    </div>
  );
}
