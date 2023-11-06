import React from "react";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";
import Img1 from "./ImagesItem/brownie.jpg";
import Img2 from "./ImagesItem/cake.jpg";
import Img3 from "./ImagesItem/1325359.png";
import '../css/style.css';

function ItemListContainer({ greeting }) {

  return (
    <MDBCarousel showIndicators showControls fade carouselInnerClassName="vh-100">
      <MDBCarouselItem
        className="w-100 d-block active"
        captionClassName="text"
        itemId={1}
        src={Img1}
        alt="Img1"
      >
        <h3>{greeting}</h3>
      </MDBCarouselItem>

      <MDBCarouselItem
        className="w-100 img-fluid d-block "
        captionClassName="text"
        itemId={2}
        src={Img2}
        alt="Img2"
      >
       <h3>{greeting}</h3>
      </MDBCarouselItem>

      <MDBCarouselItem
        className="w-100 img-fluid d-block"
        captionClassName="text"
        itemId={3}
        src={Img3}
        alt="Img3"
      >
        <h3>{greeting}</h3>
      </MDBCarouselItem>
    </MDBCarousel>
  );
}


export default ItemListContainer;
