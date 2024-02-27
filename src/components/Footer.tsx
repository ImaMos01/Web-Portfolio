import useClipboardCopy from "../hooks/useClipboardCopy";
import { RiMailLine } from "react-icons/ri";

function Footer() {
  const copyToClipBoard = useClipboardCopy();
  return (
    <footer className="bottom-0 left-0 z-20 w-full p-4 rounded-xl dark:bg-gray-800">
      <div className="flex flex-row gap-x-2 items-center mb-2">
        <RiMailLine className="size-4 md:size-6" />
        <h3 className="text-lg md:text-2xl font-bold">Mail</h3>
      </div>
      <div className="grid grid-cols-8 gap-2 w-full max-w-[23rem]">
        <label htmlFor="email" className="sr-only">
          email
        </label>
        <input
          id="email"
          type="text"
          className="col-span-6 bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value="imoscosoa@unsa.edu.pe"
          disabled
        />
        <button
          onClick={() => copyToClipBoard("imoscosoa@unsa.edu.pe")}
          data-copy-to-clipboard-target="imoscosoa@unsa.edu.pe"
          className="col-span-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 items-center inline-flex justify-center"
        >
          <span id="default-message">Copiar</span>
        </button>
      </div>
    </footer>
  );
}

export default Footer;
