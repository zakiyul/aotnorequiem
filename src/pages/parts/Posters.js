import { SRLWrapper } from "simple-react-lightbox";
import styles from "./Artwork.module.css";

const items = [
  <img
    src="http://localhost:3000/posters/0.jpeg"
    alt="0"
    className={styles.carouselImg}
  />,
  <img
    src="http://localhost:3000/posters/1.jpeg"
    alt="1"
    className={styles.carouselImg}
  />,
  <img
    src="http://localhost:3000/posters/2.jpeg"
    alt="2"
    className={styles.carouselImg}
  />,
  <img
    src="http://localhost:3000/posters/3.jpeg"
    alt="3"
    className={styles.carouselImg}
  />,
  <img
    src="http://localhost:3000/posters/4.jpeg"
    alt="4"
    className={styles.carouselImg}
  />,
  <img
    src="http://localhost:3000/posters/5.jpeg"
    alt="5"
    className={styles.carouselImg}
  />,
  <img
    src="http://localhost:3000/posters/6.jpeg"
    alt="6"
    className={styles.carouselImg}
  />,
  <img
    src="http://localhost:3000/posters/7.jpeg"
    alt="7"
    className={styles.carouselImg}
  />,
  <img
    src="http://localhost:3000/posters/8.jpeg"
    alt="8"
    className={styles.carouselImg}
  />,
  <img
    src="http://localhost:3000/posters/9.jpeg"
    alt="9"
    className={styles.carouselImg}
  />,
  <img
    src="http://localhost:3000/posters/10.jpeg"
    alt="10"
    className={styles.carouselImg}
  />,
  <img
    src="http://localhost:3000/posters/11.jpeg"
    alt="11"
    className={styles.carouselImg}
  />,
  <img
    src="http://localhost:3000/posters/12.jpeg"
    alt="12"
    className={styles.carouselImg}
  />,
  <img
    src="http://localhost:3000/posters/13.jpeg"
    alt="13"
    className={styles.carouselImg}
  />,
];
const Posters = () => {
  return (
    <SRLWrapper>
      <div className="grid grid-cols-3 gap-4">
        {items.map((item, index) => (
          <a href={`http://localhost:3000/posters/${index}.jpeg`}>{item}</a>
        ))}
      </div>
    </SRLWrapper>
  );
};

export default Posters;
