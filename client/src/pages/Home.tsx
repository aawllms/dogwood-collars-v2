import Carousel from "react-bootstrap/Carousel";
import dogwoodCollars from "../../public/dogwoodCollars.jpeg";
import duca from "../../public/duca.jpeg";
import dreya from "../../public/dreya.jpeg";
import dogs from "../../public/dogs.jpeg";
import whitespotted from "../../public/whitespotted.jpeg";
import browndog from "../../public/browndog.png";

function Home() {
  return (
    <Carousel>
      <Carousel.Item>
        <img src={dogwoodCollars} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={duca} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={dreya} alt="Third slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={dogs} alt="Fourth slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={whitespotted} alt="fifth slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={browndog} alt="Sixth slide" />
      </Carousel.Item>
    </Carousel>
  );
}

export default Home;
