import {
  RiFileDownloadLine,
  RiLinkedinBoxFill,
  RiGithubFill,
  RiMailLine,
} from "react-icons/ri";

import resumeImanol from "../assets/resumeImanol.pdf";

import profile from "../assets/profile.png";

function Home() {
  /*
    First section of the pages that bring a preview of the profile

    Args:
      empty
    Return:
      A simple text with buttons and a image
  */
  return (
    <section className="w-full mx-auto pt-40 w-[300px] md:w-[500px] lg:w-[740px] flex flex-col-reverse lg:flex-row items-center lg:items-start">
      <div className="px-3 m-3">
        {/*download cv*/}
        <a
          className="bg-gray-700 hover:bg-gray-900 rounded-full inline-flex items-center justify-center border gap-x-2 px-3 mb-3 py-1.5"
          href={resumeImanol}
          download="imanolCV.pdf"
        >
          <RiFileDownloadLine className="size-6" />
          <h3 className="text-sm md:text-lg font-semibold">Descargar CV</h3>
        </a>
        {/*about me*/}
        <h1 className="text-3xl md:text-5xl font-bold pb-3 pt-1.5">
          Hola, soy Imanol
        </h1>
        <h2 className=" text-base md:text-md text-pretty font-normal">
          Soy un egresado de ciencia de la computación apasionado por el
          desarrollo de software y en la búsqueda de oportunidades para aplicar
          mis conocimientos teóricos en proyectos prácticos.
        </h2>

        {/*contacts*/}
        <nav className="flex flex-col sm:flex-row mx-auto gap-x-4 pt-10">
          <a
            className="bg-gray-600 inline-flex items-center justify-center border rounded-lg hover:bg-gray-800 gap-x-2 px-3 mb-3 py-1"
            href="#contactme"
          >
            <RiMailLine className="size-6" />
            <h3 className="text-base md:text-xl font-semibold pt-1">
              Contáctame
            </h3>
          </a>
          <a
            className="bg-gray-600 inline-flex items-center justify-center border rounded-lg hover:bg-gray-800 gap-x-2 px-3 mb-3 py-1"
            href="https://www.linkedin.com/in/imanolmos01"
            target="_blank"
          >
            <RiLinkedinBoxFill className="size-6" />
            <h3 className="text-base md:text-xl font-semibold pt-1">
              Linkedin
            </h3>
          </a>
          <a
            className="bg-gray-600 inline-flex items-center justify-center border rounded-lg hover:bg-gray-800 gap-x-2 px-3 mb-3 py-1"
            href="https://github.com/ImaMos01"
            target="_blank"
          >
            <RiGithubFill className="size-6" />
            <h3 className="text-base md:text-xl font-semibold pt-1">GitHub</h3>
          </a>
        </nav>
      </div>
      {/*profile pick*/}
      <img
        className="rounded-full size-40 mt-8"
        src={profile}
        alt="profile picture"
      />
    </section>
  );
}
export default Home;
