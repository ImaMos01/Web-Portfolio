interface itemList {
  id: number;
  item: string;
  logo: string;
}

interface techList {
  title: string;
  items: itemList[];
}

function TechItem(data: techList) {
  return (
    <article>
      <h3 className="text-xl md:text-3xl font-bold">{data.title}</h3>
      <div className="grid grid-cols-3 sm:grid-cols-4 gap-5 sm:gap-6 mt-6 pb-5 ">
        {data.items.map((it) => (
          <section
            key={it.id}
            className="lg:w-30 p-1.5 bg-dark rounded-xl dark:bg-gray-800 flex flex-col items-center"
          >
            <img
              className="h-10 lg:h-20 object-cober rounded-xl"
              src={it.logo}
              alt=""
            />
            <div className="p-2">
              <h2 className="text-sm md:text-lg font-medium"> {it.item} </h2>
            </div>
          </section>
        ))}
      </div>
    </article>
  );
}

export default TechItem;
