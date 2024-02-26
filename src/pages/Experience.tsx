import { RiBriefcase2Line } from "react-icons/ri";

import ExperItem from "../components/ExperItem";

const experienceList = [
  {
    id: 0,
    date: "Enero 2022 - Abril 2022",
    title: "Full-stack",
    company: "Femaco",
    description: "desarrollo sas",
  },
];

function Experience() {
  return (
    <section id="experience" className="w-full mx-auto py-40 lg:w-[740px]">
      <div className="px-3 m-3">
        <div className="flex flex-row gap-x-2">
          <RiBriefcase2Line className="size-8 md:size-12" />
          <h1 className="pb-10 text-3xl md:text-5xl font-bold">
            Experiencia Laboral
          </h1>
        </div>
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
