import { useEffect } from "react";

type EscapeListenerProps = {
  onReset: () => void;
};

export const EscapeListener = ({ onReset }: EscapeListenerProps) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onReset();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onReset]);

  return null;
};