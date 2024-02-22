const tecnologyList = [
  {
    id: 0,
    title: "Lenguajes de programación",
    items: [
      { item: "Javascript", logo: "#" },
      { item: "Typescript", logo: "#" },
      { item: "Python", logo: "" },
      { item: "C++", logo: "" },
    ],
  },
];

function Technology() {
  return (
    <section id="proyects" className="w-full mx-auto py-40 lg:w-[740px]">
      <div className="ps-3 ms-3">
        <h3 className="pb-10"> Tecnologías</h3>
        <ol className="relative">
          {tecnologyList.map((it) => (
            <li key={it.id} className="mb-5">
              <article></article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default Technology;
