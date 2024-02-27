import ProyectItem from "../components/ProyectItem.tsx";
import { RiTerminalWindowLine } from "react-icons/ri";

const proyectList = [
  {
    id: 0,
    title: "hola",
    description: "hi",
    link: "#",
    github: "#",
    image:
      "https://static1.e621.net/data/10/0c/100c62e82bab49fe439e8e2f175d6d47.png",
    tags: ["html", "css", "javascript"],
  },
  {
    id: 1,
    title: "hola",
    description: "hi",
    link: "#",
    github: "#",
    image:
      "https://static1.e621.net/data/10/0c/100c62e82bab49fe439e8e2f175d6d47.png",
    tags: ["html", "css", "javascript"],
  },
];

function Proyects() {
  return (
    <section
      id="proyects"
      className="w-full mx-auto pt-40 w-[340px] md:w-[640px] lg:w-[740px]"
    >
      <div className="ps-3 ms-3">
        <div className="flex flex-row gap-x-2">
          <RiTerminalWindowLine className="size-8 md:size-10" />
          <h1 className="pb-10 text-2xl md:text-4xl font-bold"> Proyectos</h1>
        </div>
        <ol className="relative">
          {proyectList.map((it) => (
            <li key={it.id} className="mb-5">
              <ProyectItem
                title={it.title}
                description={it.description}
                link={it.description}
                github={it.github}
                image={it.image}
              />
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default Proyects;
