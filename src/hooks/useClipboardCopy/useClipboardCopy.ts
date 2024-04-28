import { useCallback } from "react";
import { toast } from 'sonner';

function useClipboardCopy() {
  /*
  copy text to the clipboard

  Args:
    empty
  Return:
    A callback function that copy the text to the clipboard
  */
  const copyToClipboard = useCallback((text:string) => {
    if (navigator.clipboard) {
      navigator.clipboard
        .writeText(text)
        .then(() => {
          toast.success('¡Correo copiado!');
        })
        .catch((err) => {
          console.error("failed", err);
        });
    } else {
      console.log("not available");
    }
  }, []);
  return copyToClipboard;
}

export default useClipboardCopy;
