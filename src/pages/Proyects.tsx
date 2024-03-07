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
      "https://imgs.search.brave.com/0Z5UajMlgFjlF0G7v-YDlFzccYph22yyMeZDQ4pNx8E/rs:fit:860:0:0/g:ce/aHR0cHM6Ly92YXBv/cjk1LmNvbS9jZG4v/c2hvcC9hcnRpY2xl/cy9Fak9IV3FxVmdB/QWdfVkIud2VicD92/PTE3MDYwOTk2NDMm/d2lkdGg9MjAwMA",
    tags: ["html", "css", "javascript"],
  },
  {
    id: 1,
    title: "hola",
    description: "hi",
    link: "#",
    github: "#",
    image:
      "https://imgs.search.brave.com/0Z5UajMlgFjlF0G7v-YDlFzccYph22yyMeZDQ4pNx8E/rs:fit:860:0:0/g:ce/aHR0cHM6Ly92YXBv/cjk1LmNvbS9jZG4v/c2hvcC9hcnRpY2xl/cy9Fak9IV3FxVmdB/QWdfVkIud2VicD92/PTE3MDYwOTk2NDMm/d2lkdGg9MjAwMA",
    tags: ["html", "css", "javascript"],
  },
];

function Proyects() {
  /**
    Section that describe each proyect
    
    Args:
      empty
    Return:
      List of items that describe differents proyects
  */
  return (
    <section
      id="proyects"
      className="w-full mx-auto pt-40 w-[340px] md:w-[640px] lg:w-[740px]"
    >
      <div className="ps-3 ms-3">
        {/* Icon  */}
        <div className="flex flex-row gap-x-2">
          <RiTerminalWindowLine className="size-8 md:size-10" />
          <h1 className="pb-10 text-2xl md:text-4xl font-bold"> Proyectos</h1>
        </div>
        {/* List of experience */}
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
