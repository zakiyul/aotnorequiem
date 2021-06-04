import Carousel from "react-alice-carousel";
import styles from "./Artwork.module.css";
import "react-alice-carousel/lib/alice-carousel.css";
import Content from "../../components/Content";

const handleDragStart = (e) => e.preventDefault();

const items = [
  <img
    src="http://localhost:3000/posters/1.jpeg"
    alt="1"
    onDragStart={handleDragStart}
    className={styles.carouselImg}
  />,
  <img
    src="http://localhost:3000/posters/2.jpeg"
    alt="2"
    onDragStart={handleDragStart}
    className={styles.carouselImg}
  />,
  <img
    src="http://localhost:3000/posters/3.jpeg"
    alt="3"
    onDragStart={handleDragStart}
    className={styles.carouselImg}
  />,
  <img
    src="http://localhost:3000/posters/4.jpeg"
    alt="4"
    onDragStart={handleDragStart}
    className={styles.carouselImg}
  />,
  <img
    src="http://localhost:3000/posters/5.jpeg"
    alt="5"
    onDragStart={handleDragStart}
    className={styles.carouselImg}
  />,
  <img
    src="http://localhost:3000/posters/6.jpeg"
    alt="6"
    onDragStart={handleDragStart}
    className={styles.carouselImg}
  />,
  <img
    src="http://localhost:3000/posters/7.jpeg"
    alt="7"
    onDragStart={handleDragStart}
    className={styles.carouselImg}
  />,
  <img
    src="http://localhost:3000/posters/8.jpeg"
    alt="8"
    onDragStart={handleDragStart}
    className={styles.carouselImg}
  />,
  <img
    src="http://localhost:3000/posters/9.jpeg"
    alt="9"
    onDragStart={handleDragStart}
    className={styles.carouselImg}
  />,
  <img
    src="http://localhost:3000/posters/10.jpeg"
    alt="10"
    onDragStart={handleDragStart}
    className={styles.carouselImg}
  />,
  <img
    src="http://localhost:3000/posters/11.jpeg"
    alt="11"
    onDragStart={handleDragStart}
    className={styles.carouselImg}
  />,
  <img
    src="http://localhost:3000/posters/12.jpeg"
    alt="12"
    onDragStart={handleDragStart}
    className={styles.carouselImg}
  />,
  <img
    src="http://localhost:3000/posters/13.jpeg"
    alt="13"
    onDragStart={handleDragStart}
    className={styles.carouselImg}
  />,
  <img
    src="http://localhost:3000/posters/0.jpeg"
    alt="0"
    onDragStart={handleDragStart}
    className={styles.carouselImg}
  />,
];
const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
};

const Artwork = () => {
  return (
    // <Content>
    <div>
      <Content title="Artwork" />
      <div className={styles.container}>
        <Carousel mouseTracking items={items} responsive={responsive} />
      </div>
    </div>
    // </Content>
  );
};

export default Artwork;
