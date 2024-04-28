import ProjectItem from "../components/ProjectItem.tsx";
import { RiTerminalWindowLine } from "react-icons/ri";
import {projectList} from "../assets/projectList.ts";


function Projects() {
  /**
    Section that describe each project
    
    Args:
      empty
    Return:
      List of items that describe differents projects
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
          {projectList.map((it) => (
            <li key={it.id} className="mb-5">
              <ProjectItem
                title={it.title}
                description={it.description}
                link={it.link}
                github={it.github}
                image={it.image}
                tags={it.tags}
                idate={it.idate}
                fdate={it.fdate}
              />
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default Projects;
