import ProyectItem from "../components/ProyectItem.tsx";
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
    <section id="proyects" className="w-full mx-auto py-40 lg:w-[740px]">
      <div className="ps-3 ms-3">
        <h3 className="pb-10"> Proyectos</h3>
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
