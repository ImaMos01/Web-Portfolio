import {
  RiFileDownloadLine,
  RiLinkedinBoxFill,
  RiGithubFill,
  RiMailLine,
} from "react-icons/ri";

function Home() {
  return (
    <section className="w-full mx-auto pt-40 w-[350px] sm:w-[500px] lg:w-[740px] flex flex-col-reverse lg:flex-row">
      <div className="px-3 m-3">
        {/*download cv*/}
        <a
          className="bg-gray-700 dark:hover:bg-blue-500 rounded-full inline-flex items-center justify-center border gap-x-2 px-3 mb-3 py-1.5"
          href="#"
          download="imanolCV.pdf"
        >
          <RiFileDownloadLine className="size-6" />
          <h3 className="text-sm md:text-xl font-semibold pt-1">
            Descargar CV
          </h3>
        </a>
        {/*about me*/}
        <h1 className="text-4xl md:text-6xl font-bold pb-3 pt-1.5">
          Hola, soy Imanol
        </h1>
        <h2 className=" text-lg md:text-2xl text-pretty font-normal">
          años de experiencia. Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Id sed fuga eum vero nostrum pariatur asperiores
          similique ea? Dolore mollitia quas facilis ab quibusdam at asperiores
          quia impedit omnis soluta.
        </h2>

        {/*contacts*/}
        <nav className="flex flex-row mx-auto gap-x-4 pt-10">
          <a
            className="dark:bg-gray-600 inline-flex items-center justify-center border rounded-lg dark:hover:bg-blue-500 gap-x-2 px-3 mb-3 py-1"
            href=""
          >
            <RiMailLine className="size-6" />
            <h3 className="text-lg md:text-2xl font-semibold pt-1">
              Contáctame
            </h3>
          </a>
          <a
            className="dark:bg-gray-600 inline-flex items-center justify-center border rounded-lg dark:hover:bg-blue-500 gap-x-2 px-3 mb-3 py-1"
            href="https://www.linkedin.com/in/imanolmos01"
          >
            <RiLinkedinBoxFill className="size-6" />
            <h3 className="text-lg md:text-2xl font-semibold pt-1">Linkedin</h3>
          </a>
          <a
            className="dark:bg-gray-600 inline-flex items-center justify-center border rounded-lg dark:hover:bg-blue-500 gap-x-2 px-3 mb-3 py-1"
            href="https://github.com/ImaMos01"
          >
            <RiGithubFill className="size-6" />
            <h3 className="text-lg md:text-2xl font-semibold pt-1">GitHub</h3>
          </a>
        </nav>
      </div>
      {/*profile pick*/}
      <img
        className="rounded-full size-40 mt-8"
        src="https://imgs.search.brave.com/Frov6VD-Lk9aqhj4MC7oXcTbCLxj9USrpuSsteJpFPA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9oaXBz/LmhlYXJzdGFwcHMu/Y29tL2htZy1wcm9k/L2ltYWdlcy80ODQy/MDUzMy0yMDQ3MjM1/NjY4NzAzNTU2LTU5/MzA3MzI4MjUwNjky/MjM5MzYtbi0xNTg5/OTg3Mzk0LmpwZz9j/cm9wPTAuOTE0eHc6/MC45MTR4aDswLjA0/MzJ4dywwLjA1NTN4/aCZyZXNpemU9NjQw/Oio"
        alt="profile picture"
      />
    </section>
  );
}
export default Home;
