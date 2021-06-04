const Nbsp = () => "\u00A0";

const Nbsps = ({ children }) => {
  return (
    <div>
      <Nbsp /> <Nbsp /> <Nbsp /> <Nbsp /> <Nbsp /> <Nbsp /> <Nbsp /> <Nbsp />
      {children}
    </div>
  );
};

export default Nbsps;
