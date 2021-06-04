import Title from "../config/HelmetConfig";
import Hero from "../components/Hero";
import Introduction from "./parts/Introduction";
import Disclaimer from "./parts/Disclaimer";
import Artwork from "./parts/Artwork";

const Home = () => {
  return (
    <>
      <Title title="AoT no Requiem" />
      <Hero />
      <Introduction />
      <div className="bg-ymir bg-no-repeat w-full bg-center bg-cover flex justify-center text-white align-center py-32">
        <h2 className="text-4xl">"A new beginning is about to be born"</h2>
      </div>
      <Artwork />
      <Disclaimer />
    </>
  );
};

export default Home;
