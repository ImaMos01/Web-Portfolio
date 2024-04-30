import { RiUserAddLine } from "react-icons/ri";
import about from "../assets/about.jpg";

function AboutMe() {
  /**
    section that describe my bio

    Args:
      empty
    Return:
      simple bio text with a image
   */
  return (
    <section
      id="aboutme"
      className="w-full mx-auto py-40 w-[340px] md:w-[640px] lg:w-[740px]"
    >
      <div className="ps-3 ms-3">
        {/* Icon */}
        <div className="flex flex-row gap-x-2">
          <RiUserAddLine className="size-8 md:size-10" />
          <h1 className="pb-4 text-2xl md:text-4xl font-bold">Sobre mí</h1>
        </div>

        {/*Description */}
        <article className="flex flex-col md:flex-row gap-x-4 items-center ml-1">
          <div>
            <h3 className="text-base md:text-lg font-semibold pb-3">
              Arequipa/Perú
            </h3>
            <h2 className="text-base md:text-lg text-pretty pb-4 font-normal mr-2 sm:mr-0">
              Me llamo Imanol Moscoso y empece en la programación en la
              universidad.
            </h2>
            <h2 className="text-base md:text-lg text-pretty pb-4 font-normal mr-2 sm:mr-0">
              Mi objetivo es adquirir experiencia práctica en el desarrollo de
              software y contribuir al éxito de proyectos desafiantes. Estoy
              buscando oportunidades para aprender y crecer en un entorno de
              trabajo colaborativo, donde pueda aplicar mis habilidades técnicas
              y creativas para crear soluciones web innovadoras y de calidad.
            </h2>
          </div>

          {/*Image */}
          <img
            className=" size-48 rounded"
            src={about}
            alt="profile picture"
          />
        </article>
      </div>
    </section>
  );
}
export default AboutMe;
