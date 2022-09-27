import Pixel from "./Pixel";
const Row = ({ width, color, setColor }) => {
  let pixels = [];

  for (let i = 0; i < width; i++) {
    pixels.push(<Pixel selectedColor={color} setColor={setColor}/>);
  }

  return <div className="inline-block">{pixels}</div>;
};

export default Row;
