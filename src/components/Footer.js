const Footer = () => {
  return (
    <footer className="bg-black text-white flex justify-center py-2">
      <a
        href="https://twitter.com/zekiul"
        className="mr-10 py-2 px-3 hover:bg-gray-500"
        target="_blank"
        rel="noreferrer"
      >
        @ZEKIUL
      </a>
      <a
        href="https://www.instagram.com/zzzakiul/"
        className="mr-10 py-2 hover:bg-gray-500 px-3"
        target="_blank"
        rel="noreferrer"
      >
        @ZZZAKIUL
      </a>
      <a
        href="https://zakiyul.github.io/"
        className="py-2 hover:bg-gray-500 px-3"
        target="_blank"
        rel="noreferrer"
      >
        ZAKIUL FIKRI
      </a>
    </footer>
  );
};

export default Footer;
