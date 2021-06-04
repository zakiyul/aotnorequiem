import Content from "../../components/Content";
import Nbsps from "../../components/Npsps";

const Disclaimer = () => {
  return (
    <Content title="Disclaimer">
      <p className="mb-7">
        <Nbsps>
          All publicly recognizable characters, settings, etc. are the property
          of Kodansha and Hajime Isayama along with the original characters and
          plot.. Kodansha/Hajime Isayama is in no way associated with the
          owners, creators, or producers of any previously copyrighted material.
          No copyright infringement is intended.
        </Nbsps>
      </p>
      <p className="mb-7">
        <Nbsps>
          AoT no Requiem is a work of FANFICTION, as such it falls under fair
          use by virtue of being non-commercial, appropriating only the concept
          of the original characters and plot (no direct asset-borrowing) and by
          making a big enough change to the original story to not be a redraw.
        </Nbsps>
      </p>
    </Content>
  );
};

export default Disclaimer;
