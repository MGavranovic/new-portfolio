import { useEffect } from "react";

type CursorProps = {
  animated: boolean;
};

function Cursor({ animated }: CursorProps) {
  useEffect(() => {
    const cursor: HTMLElement | null =
      document.getElementById("animated-cursor");

    if (!cursor) return;

    const move = (e: MouseEvent) => {
      cursor.style.setProperty("--x", `${e.clientX}px`);
      cursor.style.setProperty("--y", `${e.clientY}px`);
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      id="animated-cursor"
      className={`fixed
        w-16 h-16
        pointer-events-none
        bg-no-repeat
        ${
          animated
            ? "bg-[url('./assets/cursor/cursor-hover-sheet.png')] animate-cursor"
            : "bg-[url('./assets/cursor/cursor-static.webp')]"
        }`}
    ></div>
  );
}

export default Cursor;
