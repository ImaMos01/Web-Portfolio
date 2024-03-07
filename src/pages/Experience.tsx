import { RiBriefcase2Line } from "react-icons/ri";

import ExperItem from "../components/ExperItem";

const experienceList = [
  {
    id: 0,
    date: "Enero 2022 - Abril 2022",
    title: "Desarrollo web full-stack",
    company: "Femaco",
    description:
      "Desarrollo web full-stack simple con HTML, CSS, JavaScript, PHP y MySQL",
  },
];

function Experience() {
  /*
    Section that describe the job experience
    
    Args:
      empty
    Return:
      List of items that describe differents job experiences
  */
  return (
    <section
      id="experience"
      className="w-full mx-auto pt-40 w-[340px] md:w-[640px] lg:w-[740px]"
    >
      {/* Icon */}
      <div className="px-3 m-3">
        <div className="flex flex-row gap-x-2">
          <RiBriefcase2Line className="size-8 md:size-10" />
          <h1 className="pb-10 text-2xl md:text-4xl font-bold">
            Experiencia Laboral
          </h1>
        </div>

        {/* List of experience */}
        <ol className="relative border-s border-gray-200 dark:border-gray-700 mx-4">
          {experienceList.map((it) => (
            <li key={it.id} className="mb-10 ms-8">
              <ExperItem
                date={it.date}
                title={it.title}
                company={it.company}
                description={it.description}
              />
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
export default Experience;
