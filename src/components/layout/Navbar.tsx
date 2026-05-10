export default function Navbar() {
  return (
    <header className="fixed w-full top-0 z-50 bg-white/70 backdrop-blur-md border-b">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* LOGO */}
        <div className="text-xl font-bold text-gray-900">
          Vyntra
        </div>

        {/* NAV */}
        <nav className="hidden md:flex gap-8 text-gray-600">
          <a href="#" className="hover:text-primary">Servicios</a>
          <a href="#" className="hover:text-primary">Proyectos</a>
          <a href="#" className="hover:text-primary">Nosotros</a>
        </nav>

        {/* CTA */}
        <button className="bg-primary text-white px-5 py-2 rounded-xl">
          Hablemos
        </button>

      </div>
    </header>
  );
}