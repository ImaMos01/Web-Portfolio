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
        <h2 className="pb-10">Experiencia Laboral</h2>
        <ol className="relative border-s border-gray-200 dark:border-gray-700 mx-4">
          {experienceList.map((it) => (
            <li key={it.id} className="mb-10 ms-6">
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
