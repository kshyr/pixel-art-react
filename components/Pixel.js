import { useEffect, useRef, useState } from "react";
const Pixel = ({ selectedColor }) => {
  const [color, setColor] = useState("#FFF");
  const [mouseOnDiv, setMouseOnDiv] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const pixel = ref.current;
    pixel.addEventListener('mousedown', changeColor);
  }, [])

  function changeColor() {
    setColor(selectedColor);
  }
  return (
    <div
      className="bg-slate-50 h-4 w-4 border"
      style={{ backgroundColor: color }}
      ref={ref}
    ></div>
  );
};

export default Pixel;
