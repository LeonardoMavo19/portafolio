export interface Proyecto {
  id: string;
  titulo: string;
  descripcion: string;
  imagen: string;
  link: string;
}

export interface Servicio {
  icono: React.ReactNode;
  titulo: string;
  descripcion: string;
}

export interface Habilidad {
  nombre: string;
  icono: React.ReactNode;
}

export interface ContactoInfo {
  icono: React.ReactNode;
  titulo: string;
  valor: string;
}
