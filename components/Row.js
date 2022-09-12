import Pixel from './Pixel';
const Row = ({width}) => {

    let pixels = [];

    for (let i = 0; i < width; i++) {
        pixels.push(<Pixel/>);
    }

  return (
    <div>

    </div>
  )
}

export default Row;