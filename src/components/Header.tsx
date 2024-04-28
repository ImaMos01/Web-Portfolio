function Header() {
  /*
    Make the Header of the page
    
    Args: 
      header
    return:
      the Header  
  */
  return (
    <header className="fixed w-full flex justify-center items-center z-20 top-0 start-0 pt-10">
      <nav className="flex flex-row gap-x-2 md:gap-x-6 text-base md:text-lg font-semibold px-4 py-2 rounded-full bg-gray-600 shadow-md">
        <a href="#proyects" className="hover:text-blue-500">
          Proyectos
        </a>
        <a href="#experience" className="hover:text-blue-500">
          Experiencia
        </a>
        <a href="#technology" className="hover:text-blue-500">
          Tecnologías
        </a>
        <a href="#aboutme" className="hover:text-blue-500">
          Sobre mí
        </a>
      </nav>
    </header>
  );
}

export default Header;
