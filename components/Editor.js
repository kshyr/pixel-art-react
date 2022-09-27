import { HexColorPicker } from "react-colorful";
import { useState } from "react";
import Canvas from "./Canvas";

const Editor = () => {
  const [canvasWidth, setCanvasWidth] = useState(32);
  const [canvasHeigth, setCanvasHeigth] = useState(32);
  const [color, setColor] = useState("transparent");
  const [canvasSizeSelected, setCanvasSizeSelected] = useState(true);

  return (
    <div className="editor ">
      {canvasSizeSelected && (
        <div>
          <HexColorPicker color={color} onChange={setColor} />
          <Canvas
            width={canvasWidth}
            heigth={canvasHeigth}
            color={color}
            setColor={setColor}
          />
        </div>
      )}
    </div>
  );
};

export default Editor;
