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
      <h3>{data.title}</h3>
      <div className="flex flex-row mt-6 pb-4 gap-x-6">
        {data.items.map((it) => (
          <section
            key={it.id}
            className="w-30 p-2 bg-dark rounded-xl dark:bg-gray-800 flex flex-col items-center"
          >
            <img
              className="h-20 object-cober rounded-xl"
              src={it.logo}
              alt=""
            />
            <div className="p-2">
              <h2> {it.item} </h2>
            </div>
          </section>
        ))}
      </div>
    </article>
  );
}

export default TechItem;
