import { RiCodeSSlashFill } from "react-icons/ri";

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
      {
        id: 1,
        item: "Typescript",
        logo: "https://imgs.search.brave.com/2FW0M9sXadP75UNYUADONKDfv_F369PNLPGayhTgbMQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9m/L2Y1L1R5cGVzY3Jp/cHQuc3Zn.svg",
      },
      {
        id: 2,
        item: "Python",
        logo: "https://imgs.search.brave.com/3Nl9xY8gw7jwQPCUqZIZAFPq2HsGeZi8vOL5DCFzOMk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9icmFu/ZHNsb2dvcy5jb20v/d3AtY29udGVudC91/cGxvYWRzL2ltYWdl/cy9weXRob24tbG9n/by5wbmc",
      },
      {
        id: 3,
        item: "C++",
        logo: "https://imgs.search.brave.com/2sAYcb_8ll9cQ4tYbEze1z-TTJlZ5EnZiMtffFaoQCw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9icmFu/ZHNsb2dvcy5jb20v/d3AtY29udGVudC91/cGxvYWRzL2ltYWdl/cy9jLWxvZ28ucG5n",
      },
      {
        id: 4,
        item: "SQL",
        logo: "https://imgs.search.brave.com/1GeAadcoNYOkoM60Q9sBtYTDuVXAcIeysKAgw2wUM9s/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zZWVr/bG9nby5jb20vaW1h/Z2VzL1Mvc3FsLWxv/Z28tQzM3MERFQTA2/Ni1zZWVrbG9nby5j/b20ucG5n",
      },
    ],
  },
  {
    id: 1,
    title: "Bibliotecas, frameworks y herramientas",
    items: [
      {
        id: 0,
        item: "React",
        logo: "https://imgs.search.brave.com/qlFAtMUjOJ06EBhykDOXGUrmQ4UM2GdOmNiPAzXjS5w/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9sb2dv/cy1kb3dubG9hZC5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MTYvMDkvUmVhY3Rf/bG9nb19sb2dvdHlw/ZV9lbWJsZW0tNzAw/eDYyNi5wbmc",
      },
      {
        id: 1,
        item: "Node.js",
        logo: "https://imgs.search.brave.com/CeqlmD6ZUYeLl7LtvM5k-_F6oxdyKHwq4EdWM1RT7gE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/d29ybGR2ZWN0b3Js/b2dvLmNvbS9sb2dv/cy9ub2RlanMtaWNv/bi5zdmc.svg",
      },
      {
        id: 2,
        item: "MySQL",
        logo: "https://imgs.search.brave.com/6lHxBgRoJ7Yy405ITGS8dhRMVHPgaXtdT-l8BGSmBM8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/bG9nby53aW5lL2Ev/bG9nby9NeVNRTC9N/eVNRTC1Mb2dvLndp/bmUuc3Zn.svg",
      },
      {
        id: 3,
        item: "MongoDB",
        logo: "https://imgs.search.brave.com/X0wYzieFzIkfj4cY96H6btfXAO34UKBdbUaAeh77cF8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9wbHVz/cG5nLmNvbS9pbWct/cG5nL2xvZ28tbW9u/Z29kYi1wbmctbW9u/Z28tZGItc2hhcGVk/LXN0aWNrZXItNjUw/LnBuZw",
      },
      {
        id: 4,
        item: "Tailwind",
        logo: "https://imgs.search.brave.com/Ua9XDKaT7bVbYA8zFz4KoMyu5SXiEs84fyhhNx9aud8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/d29ybGR2ZWN0b3Js/b2dvLmNvbS9sb2dv/cy90YWlsd2luZGNz/cy5zdmc.svg",
      },
      {
        id: 5,
        item: "Express.js",
        logo: "https://imgs.search.brave.com/U5Sr2bCIOTClXCyyfpdjT-77MKVhsELL1Ddmdeo1bxc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/aWNvbi1pY29ucy5j/b20vaWNvbnMyLzI2/OTkvUE5HLzUxMi9l/eHByZXNzanNfbG9n/b19pY29uXzE2OTE4/NS5wbmc",
      },
      {
        id: 6,
        item: "Git/Github",
        logo: "https://imgs.search.brave.com/21yTT_m8HFrbU4qjmx9o1DGM9bX1MG-WpAAMji1tFso/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy81/ODQ3Zjk4MWNlZjEw/MTRjMGI1ZTQ4YmUu/cG5n",
      },
      {
        id: 7,
        item: "Docker",
        logo: "https://imgs.search.brave.com/yjXLWE5MFFsDq6pF1NDXtYfl0boqbGFKvMFqhPjvdtY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/ZG9ja2VyLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyMy8w/NS9zeW1ib2xfYmx1/ZS1kb2NrZXItbG9n/by5wbmc",
      },
    ],
  },
];

function Technology() {
  return (
    <section
      id="technology"
      className="w-full mx-auto pt-40 w-[340px] md:w-[640px] lg:w-[740px]"
    >
      <div className="ps-3 ms-3">
        <div className="flex flex-row gap-x-2 text-center">
          <RiCodeSSlashFill className="size-8 md:size-10" />
          <h1 className="pb-10 text-2xl md:text-4xl font-bold">Tecnologías</h1>
        </div>
        <ol className="relative px-4">
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
