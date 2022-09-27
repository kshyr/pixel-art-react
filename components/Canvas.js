import Row from "./Row";
import { useRef } from "react";

const Canvas = ({ width, heigth, color, setColor }) => {
  let rows = [];
  const canvasRef = useRef();
  for (let i = 0; i < heigth; i++) {
    rows.push(<Row width={width} color={color} setColor={setColor} />);
  }

  return (
    <div>
      <div ref={canvasRef} className="border-2">{rows}</div>
      <button className="bg-slate-50 border-2 border-slate-200 rounded-md float-right"
        onClick={async () => {
          const { exportComponentAsPNG } = await import(
            "react-component-export-image"
          );
          exportComponentAsPNG(canvasRef);
        }}
      >
        Download as PNG
      </button>
    </div>
  );
};

export default Canvas;
