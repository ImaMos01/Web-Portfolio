import { RiUserAddLine } from "react-icons/ri";

function AboutMe() {
  return (
    <section
      id="aboutme"
      className="w-full mx-auto py-40 w-[340px] md:w-[640px] lg:w-[740px]"
    >
      <div className="ps-3 ms-3">
        <div className="flex flex-row gap-x-2">
          <RiUserAddLine className="size-8 md:size-10" />
          <h1 className="pb-4 text-2xl md:text-4xl font-bold">Sobre mí</h1>
        </div>
        <article className="flex flex-col md:flex-row gap-x-4 items-center">
          <div>
            <h3 className="text-base md:text-lg font-semibold pb-3">
              Arequipa/Perú
            </h3>
            <h2 className="text-base md:text-lg text-pretty pb-4 font-normal mr-2 sm:mr-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae est explicabo numquam odit odio reiciendis culpa vitae.
              Placeat, repellendus! Ullam modi quia dignissimos tenetur nesciunt
              dolorum laudantium, quo recusandae aut.
            </h2>
          </div>
          <img
            className=" size-40 "
            src="https://imgs.search.brave.com/Frov6VD-Lk9aqhj4MC7oXcTbCLxj9USrpuSsteJpFPA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9oaXBz/LmhlYXJzdGFwcHMu/Y29tL2htZy1wcm9k/L2ltYWdlcy80ODQy/MDUzMy0yMDQ3MjM1/NjY4NzAzNTU2LTU5/MzA3MzI4MjUwNjky/MjM5MzYtbi0xNTg5/OTg3Mzk0LmpwZz9j/cm9wPTAuOTE0eHc6/MC45MTR4aDswLjA0/MzJ4dywwLjA1NTN4/aCZyZXNpemU9NjQw/Oio"
            alt="profile picture"
          />
        </article>
      </div>
    </section>
  );
}
export default AboutMe;
