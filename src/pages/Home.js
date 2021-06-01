import Title from "../config/HelmetConfig";
import Hero from "../components/Hero";
import Content from "../components/Content";

const Nbsp = () => "\u00A0";

const Nbsps = ({ children }) => {
  return (
    <div>
      <Nbsp /> <Nbsp /> <Nbsp /> <Nbsp /> <Nbsp /> <Nbsp /> <Nbsp /> <Nbsp />
      {children}
    </div>
  );
};

const Home = () => {
  return (
    <>
      <Title title="AoT no Requiem" />
      <Hero />
      <Content title="Introduction">
        <p className="mb-7">
          <Nbsps>
            Attack on Titan (Shingeki no Kyojin) is a Japanese manga series
            created by Hajime Isayama. It was serialized in Kodansha's monthly
            Bessatsu Shōnen Magazine from September 2009 to April 2021. The
            story began with a simple premise set in a world where humanity was
            terrorized by giant humanoid beings, until the story gradually
            progresses to tackle very sensitive political and social themes like
            war, natalism, racism, cycle of hatred, psychological traumas,
            family, and child abuse. There are also some elements that reflect
            real, historical events so a great many of these issues really hit
            close to home.
          </Nbsps>
        </p>
        <p className="mb-7">
          <Nbsps>
            After the manga finale, many fans around the world voiced great
            disappointed and concern when such deep and relatable issues were
            not properly addressed. In the canon ending, these serious and
            complex themes, character development, and world building were
            forgotten or reduced to romance and some comedic scenes which goes
            against the established darker and more serious tone of the series.
            Hence the mission of AOTNOREQUIEM is to give those who were
            unsatisfied with the ending, who grew up with with series and held
            it close to their hearts a proper closure and also a fitting and
            satisfactory conclusion to what we all believed was a modern
            masterpiece.
          </Nbsps>
        </p>
        <p>
          <Nbsps>
            AOT no Requiem will explore an alternate ending that is the opposite
            of the canon one. It is a rewrite of the last three chapters of
            Attack on titan (137, 138, 139) and combined into ONE long chapter
            updated into parts. It will still follow the events of the previous
            chapters, so please continue to support Attack on Titan’s official
            release. Thank you.
          </Nbsps>
        </p>
      </Content>
      <Content title="Disclaimer">
        <p className="mb-7">
          <Nbsps>
            All publicly recognizable characters, settings, etc. are the
            property of Kodansha and Hajime Isayama along with the original
            characters and plot.. Kodansha/Hajime Isayama is in no way
            associated with the owners, creators, or producers of any previously
            copyrighted material. No copyright infringement is intended.
          </Nbsps>
        </p>
        <p className="mb-7">
          <Nbsps>
            AoT no Requiem is a work of FANFICTION, as such it falls under fair
            use by virtue of being non-commercial, appropriating only the
            concept of the original characters and plot (no direct
            asset-borrowing) and by making a big enough change to the original
            story to not be a redraw.
          </Nbsps>
        </p>
      </Content>
    </>
  );
};

export default Home;
