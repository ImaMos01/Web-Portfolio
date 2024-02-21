function Home() {
  return (
    <section className="w-full mx-auto py-40 lg:w-[740px] flex flex-row">
      <div className="px-3 m-3">
        <button>Descargar CV</button>
        <h1 className="text-5xl font-bold pb-5">Hey, soy Imanol</h1>
        <h2 className="text-1xl text-pretty">
          años de experiencia. Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Id sed fuga eum vero nostrum pariatur asperiores
          similique ea? Dolore mollitia quas facilis ab quibusdam at asperiores
          quia impedit omnis soluta.
        </h2>

        <nav className="flex flex-row mx-auto px-2 gap-x-6 mt-4">
          <a href="">Contáctame</a>
          <a href="https://www.linkedin.com/in/imanolmos01">Linkedin</a>
          <a href="https://github.com/ImaMos01">GitHub</a>
        </nav>
      </div>
      <img
        className="rounded-full size-40 mt-8"
        src="https://imgs.search.brave.com/Frov6VD-Lk9aqhj4MC7oXcTbCLxj9USrpuSsteJpFPA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9oaXBz/LmhlYXJzdGFwcHMu/Y29tL2htZy1wcm9k/L2ltYWdlcy80ODQy/MDUzMy0yMDQ3MjM1/NjY4NzAzNTU2LTU5/MzA3MzI4MjUwNjky/MjM5MzYtbi0xNTg5/OTg3Mzk0LmpwZz9j/cm9wPTAuOTE0eHc6/MC45MTR4aDswLjA0/MzJ4dywwLjA1NTN4/aCZyZXNpemU9NjQw/Oio"
        alt="profile picture"
      />
    </section>
  );
}
export default Home;
