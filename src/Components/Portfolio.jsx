import Title from "./Title"
import img1 from '../assets/img1.png'
import img2 from '../assets/img2.png'
import img3 from '../assets/img3.png'
import { useState } from "react"

export default function Portfolio() {
  const images = [img1, img2, img3, img1, img2, img3];
  const [hoveredIndex, setHoveredIndex] = useState(null);

  function visible(index) {
    setHoveredIndex(index);
  }

  function invisible() {
    setHoveredIndex(null);
  }

  return (
    <>      <Title title="Portfolio Component" />

    <div className="p-5">
    <div className="d-flex flex-row justify-content-center pt-3 align-items-center flex-wrap p-3">
      {images.map((imgSrc, idx) => (
        <div className="col-md-4 p-4" key={idx}>
          <div
            className="position-relative"
            onMouseEnter={() => visible(idx)}
            onMouseOut={invisible}
          >
            <img src={imgSrc} alt="" className="img-fluid" />
            <div
              className={`position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center main-bg ${hoveredIndex === idx ? 'opacity-100' : 'opacity-0'}`}
            ></div>
          </div>
        </div>
      ))}
    </div></div>
    </>
    )
}
