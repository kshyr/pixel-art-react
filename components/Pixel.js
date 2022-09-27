import { useRef, useState } from "react";

const Pixel = ({ selectedColor }) => {
  const [color, setColor] = useState(selectedColor);
  const ref = useRef();
  return (
    <div
      className="bg-slate-50 h-4 w-4"
      style={{ backgroundColor: color, userSelect: "none" }}
      ref={ref}
      onMouseOver={(e) => {
        if (e.buttons === 1) {
          setColor(selectedColor);
        }
      }}
      onMouseDown={() => setColor(selectedColor)}
    ></div>
  );
};

export default Pixel;
