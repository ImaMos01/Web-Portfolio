const proyectList = [
  {
    title: "hola",
    description: "hi",
    link: "#",
    github: "#",
    image: "#",
    tags: ["html", "css", "javascript"],
  },
];

function Proyects() {
  return (
    <section
      id="proyects"
      className="w-full mx-auto py-40 lg:w-[740px] flex flex-row"
    >
      <div className="px-3 m-3">
        <h3 className="pb-10"> Proyectos</h3>
        <ol>
          {proyectList.map((it) => (
            <li>
              {it}
              <article></article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default Proyects;
