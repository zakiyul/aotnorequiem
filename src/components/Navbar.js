import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [homeShow, setHomeShow] = React.useState(false);
  const [bonusShow, setBonusShow] = React.useState(false);
  const [chapterShow, setChapterShow] = React.useState(false);
  const handleHomeShow = () => {
    setHomeShow(!homeShow);
  };
  const handleBonusShow = () => {
    setBonusShow(!bonusShow);
  };
  const handleChapterShow = () => {
    setChapterShow(!chapterShow);
  };
  return (
    <div className="bg-black text-white px-10 flex align-center sticky top-0">
      <ul className="flex align-center justify-center p-4">
        <Link to="/">
          <img
            src="https://www.aotnorequiem.com/assets/images/text-logo.png"
            alt="aotrequiem"
            className="mr-7"
            style={{ width: 150 }}
          />
        </Link>
        <li className="mr-7 mt-2">
          <div className="relative">
            <button onClick={handleHomeShow} className="flex focus:ring-0">
              HOME
              <svg
                className="h-5 w-5 text-white mt-1 ml-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
            {homeShow === false && <div className=""></div>}
            {homeShow === true && (
              <div className="absolute right-0 mt-2 py-2 w-60 bg-black text-white rounded-md shadow-xl z-20">
                <Link
                  to="/about-us"
                  className="block px-4 py-2 text-sm capitalize hover:bg-gray-900"
                >
                  ABOUT US
                </Link>
                <Link
                  to="/legal"
                  className="block px-4 py-2 text-sm capitalize hover:bg-gray-900"
                >
                  LEGAL
                </Link>
              </div>
            )}
          </div>
        </li>
        <li className="mt-2 mr-7">
          <div className="relative">
            <button onClick={handleChapterShow} className="flex focus:ring-0">
              THE FINAL CHAPTER
              <svg
                className="h-5 w-5 text-white mt-1 ml-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
            {chapterShow === false && <div className=""></div>}
            {chapterShow === true && (
              <div className="absolute right-0 mt-2 py-2 w-60 bg-black text-white rounded-md shadow-xl z-20">
                <Link
                  to="/chapter/aot-no-requiem/1"
                  className="block px-4 py-2 text-sm capitalize hover:bg-gray-900"
                >
                  AOT NO REQUIEM: PART 1
                </Link>
              </div>
            )}
          </div>
        </li>
        <li className="mr-7 mt-2">
          <Link to="/about">ABOUT ISAYAMA</Link>
        </li>
        <li className="mt-2 mr-7">
          <div className="relative">
            <button onClick={handleBonusShow} className="flex focus:ring-0">
              BONUS
              <svg
                className="h-5 w-5 text-white mt-1 ml-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
            {bonusShow === false && <div className=""></div>}
            {bonusShow === true && (
              <div className="absolute right-0 mt-2 py-2 w-60 bg-black text-white rounded-md shadow-xl z-20">
                <Link
                  to="/bonus/promo-posters"
                  className="block px-4 py-2 text-sm capitalize hover:bg-gray-900"
                >
                  PROMO POSTERS
                </Link>
              </div>
            )}
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
