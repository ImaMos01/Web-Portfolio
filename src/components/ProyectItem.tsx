interface DataProyect {
  title: string;
  description: string;
  link: string;
  github: string;
  image: string;
  tags?: string[];
}

function ProyectItem(data: DataProyect) {
  return (
    <article className="flex flex-col md:flex-row items-start md:items-center bg-white border border-gray-200 rounded-lg shadow dark:border-gray-700 dark:bg-gray-800 mr-6 md:mr-0">
      <img
        className="object-cover w-full rounded-t-lg h-80 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
        src={data.image}
        alt={data.image}
      />
      <div className="flex flex-col justify-between p-4">
        <h5 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {data.title}
        </h5>
        <div className="mb-2 flex flex-row gap-x-6 dark:text-white">
          <button>css</button>
          <button>html</button>
          <button>sas</button>
        </div>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {data.description}
        </p>
        <nav className="flex flex-row gap-x-4 dark:text-white">
          <a
            href={data.github}
            className="p-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            github
          </a>
          <a
            href={data.link}
            className="p-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            preview
          </a>
        </nav>
      </div>
    </article>
  );
}

export default ProyectItem;
