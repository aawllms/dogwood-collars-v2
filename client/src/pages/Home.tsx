// export default function home() {
//   return <div> Welcome to the home page</div>;
// }
import Carousel from "react-bootstrap/Carousel";
import dogwoodCollars from "../../public/dogwoodCollars.jpeg";
import duca from "../../public/duca.jpeg";
import dreya from '../../public/dreya.jpeg'

function Home() {
  return (
    <Carousel>
      <Carousel.Item>
        <img src={dogwoodCollars} alt="First slide" />
        {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img src={duca} alt="Second slide" />
        {/* <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img src={dreya} alt="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Home;
