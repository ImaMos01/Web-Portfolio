import { RiCodeSSlashFill } from "react-icons/ri";

import TechItem from "../components/TechItem";
import { tecnologyList } from "../assets/tecnologyList.ts";

function Technology() {
  /**
    Section that describe each Tecnology subsection
    
    Args:
      empty
    Return:
      List of items that describe differents tech subsections
  */
  return (
    <section
      id="technology"
      className="w-full mx-auto pt-40 w-[340px] md:w-[640px] lg:w-[740px]"
    >
      <div className="ps-3 ms-3">
        {/*Icon */}
        <div className="flex flex-row gap-x-2 text-center">
          <RiCodeSSlashFill className="size-8 md:size-10" />
          <h1 className="pb-10 text-2xl md:text-4xl font-bold">Tecnologías</h1>
        </div>
        {/* List of technology */}
        <ol className="relative">
          {tecnologyList.map((it) => (
            <li key={it.id} className="mb-5 mr-3">
              <TechItem title={it.title} items={it.items} />
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default Technology;
