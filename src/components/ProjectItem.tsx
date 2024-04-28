import {
  RiGithubFill,
  RiLink,
} from "react-icons/ri";

interface Tags {
  name: string;
  cBackground: string,
  cText: string
}

interface DataProject {
  title: string;
  description: string;
  link?: string;
  github: string;
  image: string;
  tags?: Tags[];
  idate: string;
  fdate: string
}

function ProjectItem(data: DataProject) {
  /*
    card item for projects
    
    Args: 
      DataProyect: information about the project
    return:
      card item
  */
  return (
    <article className="flex flex-col md:flex-row items-start md:items-center border rounded-lg shadow border-gray-700 bg-gray-800 mr-6 md:mr-0">
      {/* Image of the proyect */}
      <img
        className="object-cover w-full rounded-t-lg h-80 md:h-auto md:w-52 md:rounded-none md:rounded-s-lg"
        src={data.image}
        alt={data.image}
      />

      {/* description of the proyect */}
      <div className="flex flex-col justify-between p-4">
        <h5 className="mb-1 text-2xl font-bold tracking-tight text-white">
          {data.title}
        </h5>

        {/*Frameworks used */}
        <div className="mb-2 flex flex-row gap-x-1.5 text-white">
          {data.tags?.map((it, index)=>(
            <span 
              key={index}
              className={`${it.cBackground} ${it.cText} text-xs font-medium me-1 px-2.5 py-0.5 rounded-full`}
            >
              {it.name}
            </span>
          ))}
        </div>
        <div className="flex flex-row text-sm text-gray-500 mb-2 gap-2">
        <p >{data.idate}</p> -
        <p >{data.fdate}</p>
        </div>
        <p className="mb-3 font-normal text-gray-400">
          {data.description}
        </p>

        {/* links to the proyects */}
        <nav className="flex flex-row gap-x-4 text-white">
          <a
            href={data.github}
            target="_blank"
            className="flex flex-row p-2 items-center gap-1 text-sm font-medium focus:outline-none bg-gray-500 rounded-lg border focus:z-10 focus:ring-4 focus:ring-gray-700 text-white border-gray-200 hover:text-white hover:bg-gray-700"
          >
            <RiGithubFill />
            github
          </a>
          {data.link && (
            <a
              href={data.link}
              target="_blank"
              className="flex flex-row p-2 items-center gap-1 text-sm font-medium focus:outline-none bg-gray-500 rounded-lg border focus:z-10 focus:ring-4 focus:ring-gray-700 text-white border-gray-200 hover:text-white hover:bg-gray-700"
              >
                <RiLink/>
                preview
            </a>
          )}
        </nav>
      </div>
    </article>
  );
}

export default ProjectItem;
