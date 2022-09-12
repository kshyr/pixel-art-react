const Canvas = ({width, heigth, color, ref}) => {
  return (
    <div ref={ref}>
        {width} {heigth} {color}
    </div>
  )
}

export default Canvas;