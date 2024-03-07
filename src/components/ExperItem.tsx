import { RiBriefcase2Line } from "react-icons/ri";

interface DataExper {
  title: string;
  description: string;
  company: string;
  date: string;
}

function ExperItem(data: DataExper) {
  /*
    Make a card of each item
    
    Args: 
      DataExper: Information of the experiencie
    return:
      card item 
  */
  return (
    <>
      {/*Icon */}
      <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -start-3 ring-8 ring-white dark:ring-gray-700 mt-2">
        <RiBriefcase2Line className="size-6" />
      </span>
      {/*Information of the experience */}
      <h3 className="mb-1 text-xl md:text-3xl font-semibold text-gray-900 dark:text-white">
        {data.title}
      </h3>
      <time className="block mb-2 text-base md:text-xl font-normal leading-none text-gray-400 dark:text-gray-500">
        {data.date}
      </time>
      <p className="text-sm md:text-lg font-medium text-gray-500 dark:text-gray-400">
        {data.description}
      </p>
    </>
  );
}

export default ExperItem;
