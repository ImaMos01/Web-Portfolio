import TechItem from "../components/TechItem";

const tecnologyList = [
  {
    id: 0,
    title: "Lenguajes de programación",
    items: [
      {
        id: 0,
        item: "Javascript",
        logo: "https://imgs.search.brave.com/obi6waBHrXy0h09CpHCRdyvOQ2aBOPtlj-OcC6xcJ3g/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/d29ybGR2ZWN0b3Js/b2dvLmNvbS9sb2dv/cy9sb2dvLWphdmFz/Y3JpcHQuc3Zn.svg",
      },
      { id: 1, item: "Typescript", logo: "#" },
      { id: 2, item: "Python", logo: "#" },
      { id: 3, item: "C++", logo: "#" },
    ],
  },
  {
    id: 1,
    title: "Bibliotecas y frameworks",
    items: [
      {
        id: 0,
        item: "React",
        logo: "https://imgs.search.brave.com/obi6waBHrXy0h09CpHCRdyvOQ2aBOPtlj-OcC6xcJ3g/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/d29ybGR2ZWN0b3Js/b2dvLmNvbS9sb2dv/cy9sb2dvLWphdmFz/Y3JpcHQuc3Zn.svg",
      },
      { id: 1, item: "Node.js", logo: "#" },
    ],
  },
];

function Technology() {
  return (
    <section id="technology" className="w-full mx-auto py-40 lg:w-[740px]">
      <div className="ps-3 ms-3">
        <h3 className="pb-10"> Tecnologías</h3>
        <ol className="relative">
          {tecnologyList.map((it) => (
            <li key={it.id} className="mb-5">
              <TechItem title={it.title} items={it.items} />
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default Technology;
