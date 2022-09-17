import Pixel from "./Pixel";
const Row = ({ width, color }) => {
  let pixels = [];

  for (let i = 0; i < width; i++) {
    pixels.push(<Pixel selectedColor={color}/>);
  }

  return <div className="inline-block">{pixels}</div>;
};

export default Row;
