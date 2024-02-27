import { useCallback } from "react";

function useClipboardCopy() {
  const copyToClipboard = useCallback((text) => {
    if (navigator.clipboard) {
      navigator.clipboard
        .writeText(text)
        .then(() => {
          alert("Correo copiado");
          console.log("text copied to clipboard");
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
