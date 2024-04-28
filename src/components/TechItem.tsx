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
  /*
    Item of the Tecnology
    
    Args:
      techList: information about the technology
    return:
      List of items for a technology
  */
  return (
    <article>
      {/* Tittle of the technology(framework/tools/etc.) */}
      <h3 className="text-xl md:text-3xl font-bold">{data.title}</h3>

      {/* Items for the technology */}
      <div className="grid grid-cols-3 sm:grid-cols-5 gap-4 sm:gap-5 mt-6 pb-5 ">
        {data.items.map((it) => (
          <section
            key={it.id}
            className="lg:w-30 p-1.5 rounded-xl bg-gray-800 flex flex-col items-center"
          >
            {/* Image  */}
            <img
              className="h-10 lg:h-20 object-cober rounded-xl"
              src={it.logo}
              alt={it.logo}
            />
            {/*Name */}
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
