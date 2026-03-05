import { Routes, Route } from 'react-router-dom';
import { useScroll } from './hooks/useScroll';
import { Navbar, Hero, About, Portfolio, Services, Experience, Contact, ProjectDetail, FadeIn } from './components';
import { PROYECTOS, SERVICIOS, HABILIDADES } from './data';

function App() {
  const scrolled = useScroll(50);

  return (
    <div className="bg-[#060913] text-[#8396C7] font-sans">
      <Navbar scrolled={scrolled} />
      <main>
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <FadeIn><About /></FadeIn>
              <FadeIn delay={0.1}><Portfolio proyectos={PROYECTOS} /></FadeIn>
              <FadeIn delay={0.2}><Services servicios={SERVICIOS} /></FadeIn>
              <FadeIn delay={0.3}><Experience habilidades={HABILIDADES} /></FadeIn>
              <FadeIn delay={0.4}><Contact /></FadeIn>
            </>
          } />
          <Route path="/home" element={
            <>
              <Hero />
              <FadeIn><About /></FadeIn>
              <FadeIn delay={0.1}><Portfolio proyectos={PROYECTOS} /></FadeIn>
              <FadeIn delay={0.2}><Services servicios={SERVICIOS} /></FadeIn>
              <FadeIn delay={0.3}><Experience habilidades={HABILIDADES} /></FadeIn>
              <FadeIn delay={0.4}><Contact /></FadeIn>
            </>
          } />
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;


