import Content from "../components/Content";
import img1 from "../img/chapters/137/1.jpg";
import img2 from "../img/chapters/137/2.jpg";
import img3 from "../img/chapters/137/3.jpg";

const Manga = () => {
  return (
    // <div className="flex justify-center">
    <Content title="Chapter 1">
      <img src={img1} alt="img1" />
      <img src={img2} alt="img2" />
      <img src={img3} alt="img3" />
    </Content>
    // </div>
  );
};

export default Manga;
