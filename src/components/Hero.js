import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="bg-hero bg-no-repeat w-full bg-center bg-cover flex justify-center text-white align-center p-72">
      <div className="flex flex-col items-center">
        <img
          src="http://localhost:3000/text-logo.png"
          alt="aotrequiem text-logo"
          style={{ width: 576 }}
        />
        <Link
          to="/chapter/aot-no-requiem/1"
          className="text-center p-3 bg-red-600 rounded w-60 hover:bg-red-700 mt-12"
        >
          READ NOW
        </Link>
      </div>
    </div>
  );
};

export default Hero;
