import { Helmet } from "react-helmet";
import Logo from "../img/logo.png";

const HelmetConfig = (props) => {
  return (
    <Helmet>
      <title>{props.title || "AoT Requiem"}</title>
      <link rel="icon" href={Logo} sizes="16x16" type="image/png" />
    </Helmet>
  );
};

export default HelmetConfig;
