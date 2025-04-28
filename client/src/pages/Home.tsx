import Carousel from "react-bootstrap/Carousel";
import dogwoodCollars from "/dogwoodCollars.jpeg";
import duca from "/duca.jpeg";
import dreya from "/dreya.jpeg";
import dogs from "/dogs.jpeg";
import whitespotted from "/whitespotted.jpeg";
import browndog from "/browndog.png";

function Home() {
  return (
    <Carousel style={{ backgroundColor: "#7ecda", margin: "10px" }}>
      <Carousel.Item style={{ height: "500px" }}>
        <img
          src={dogwoodCollars}
          alt="First slide"
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
        />
      </Carousel.Item>
      <Carousel.Item style={{ height: "500px" }}>
        <img
          src={duca}
          alt="Second slide"
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
        />
      </Carousel.Item>
      <Carousel.Item style={{ height: "500px" }}>
        <img
          src={dreya}
          alt="Third slide"
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
        />
      </Carousel.Item>
      <Carousel.Item style={{ height: "500px" }}>
        <img
          src={dogs}
          alt="Fourth slide"
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
        />
      </Carousel.Item>
      <Carousel.Item style={{ height: "500px" }}>
        <img
          src={whitespotted}
          alt="fifth slide"
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
        />
      </Carousel.Item>
      <Carousel.Item style={{ height: "500px" }}>
        <img
          src={browndog}
          alt="Sixth slide"
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Home;
