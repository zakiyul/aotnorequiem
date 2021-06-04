const Footer = () => {
  return (
    <footer className="bg-black text-white flex justify-center py-2">
      <a
        href="https://twitter.com/zekiul"
        className="mr-10 py-2 px-3 hover:bg-gray-500 flex items-center"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src="https://www.aotnorequiem.com/assets/images/twitter-logo.svg"
          alt="twitter"
          style={{ width: 24 }}
          className="mr-3"
        />
        @ZEKIUL
      </a>
      <a
        href="https://www.instagram.com/zzzakiul/"
        className="mr-10 py-2 hover:bg-gray-500 px-3 flex items-center"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src="https://www.aotnorequiem.com/assets/images/instagram-logo.svg"
          alt="instagram"
          style={{ width: 24 }}
          className="mr-3"
        />
        @ZZZAKIUL
      </a>
      <a
        href="https://zakiyul.github.io/"
        className="py-2 hover:bg-gray-500 px-3 flex items-center"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src="https://zakiyul.github.io/saye.jpg"
          alt="saye"
          style={{ width: 24 }}
          className="rounded mr-3"
        />
        ZAKIUL FIKRI
      </a>
    </footer>
  );
};

export default Footer;
