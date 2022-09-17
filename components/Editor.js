import { RgbaColorPicker } from "react-colorful";
import { useState, useRef } from "react";
import Canvas from "./Canvas";

const Editor = () => {
  const [canvasWidth, setCanvasWidth] = useState(32);
  const [canvasHeigth, setCanvasHeigth] = useState(32);
  const [color, setColor] = useState("#000000");
  const [canvasSizeSelected, setCanvasSizeSelected] = useState(true);

  return (
    <div className="editor ">
      {canvasSizeSelected && (<Canvas
        width={canvasWidth}
        heigth={canvasHeigth}
        color={color}
      />)}
      <RgbaColorPicker color={color} onChange={setColor} />
    </div>
  );
};

export default Editor;
