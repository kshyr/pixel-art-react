import Row from "./Row";
// import { exportComponentAsPNG } from "react-component-export-image";
import { useRef } from "react";
const Canvas = ({ width, heigth, color }) => {
  let rows = [];
  const canvasRef = useRef();
  for (let i = 0; i < heigth; i++) {
    rows.push(<Row width={width} color={color} />);
  }
  return (
    <>
      <div ref={canvasRef}>{rows}</div>;
      <button onClick={() => exportComponentAsPNG(canvasRef)}>Export</button>
    </>
  );
};

export default Canvas;
