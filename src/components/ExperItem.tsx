import { RiBriefcase2Line } from "react-icons/ri";

interface DataExper {
  title: string;
  description: string;
  company: string;
  date: string;
}

function ExperItem(data: DataExper) {
  return (
    <>
      <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -start-3 ring-8 ring-white dark:ring-gray-700 mt-2">
        <RiBriefcase2Line className="size-6" />
      </span>
      <h3 className="mb-1 text-2xl md:text-4xl font-semibold text-gray-900 dark:text-white">
        {data.title}
      </h3>
      <time className="block mb-2 text-lg md:text-2xl font-normal leading-none text-gray-400 dark:text-gray-500">
        {data.date}
      </time>
      <p className="text-md md:text-xl font-medium text-gray-500 dark:text-gray-400">
        {data.description}
      </p>
    </>
  );
}

export default ExperItem;
