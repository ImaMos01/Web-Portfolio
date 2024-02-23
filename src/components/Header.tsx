function Header() {
  return (
    <header className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600 pt-14">
      <nav className="flex flex-row gap-x-6 justify-center items-center text-white">
        <a href="#proyects">Proyectos</a>
        <a href="#experience">Experiencia</a>
        <a href="#technology">Tecnologías</a>
        <a href="#aboutme">Sobre mi</a>
      </nav>
    </header>
  );
}

export default Header;
