import {useClipboardCopy} from "../hooks/useClipboardCopy";
import { RiMailLine } from "react-icons/ri";

function Footer() {
  /*
    Make the footer of the page
    
    Args: 
      empty
    return:
      the footer  
  */
  const copyToClipBoard = useClipboardCopy();
  return (
    <footer id="contactme" className="bottom-0 left-0 z-20 w-full p-4 rounded-xl bg-gray-800">
      {/*Icon */}
      <div className="flex flex-row gap-x-2 items-center mb-2">
        <RiMailLine className="size-4 md:size-6" />
        <h3 className="text-lg md:text-2xl font-bold">Mail</h3>
      </div>

      {/*email section */}
      <div className="grid grid-cols-8 gap-2 w-full max-w-[23rem]">
        <label htmlFor="email" className="sr-only">
          email
        </label>
        <input
          id="email"
          type="text"
          className="col-span-6 border text-gray-500 text-sm rounded-lg focus:border-blue-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-gray-400 focus:ring-blue-500"
          value="imoscosoa@unsa.edu.pe"
          disabled
        />
        {/*Copy email to the clipboard */}
        <button
          onClick={() => copyToClipBoard("imoscosoa@unsa.edu.pe")}
          data-copy-to-clipboard-target="imoscosoa@unsa.edu.pe"
          className="col-span-2 text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800 items-center inline-flex justify-center"
        >
          <span id="default-message">Copiar</span>
        </button>
      </div>
    </footer>
  );
}

export default Footer;
