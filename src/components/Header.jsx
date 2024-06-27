import { FaAngleDown } from "react-icons/fa6";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex justify-between  bg-slate-200 px-32 py-2 items-center text-white bg-gradient-to-r from-[#533cb7] to-[#01abc1]">
      <div>
        {/* Logo */}
        <Link to="/" className="flex gap-2 items-center">
          <img src="/images/dnd-logo.png" alt="logo" className="h-20 w-20" />
          <h1 className="text-4xl font-bold">Dungeons & Devils</h1>
        </Link>
      </div>

      <nav>
        <ul className="flex space-x-8 text-2xl items-center w-full">
          <li className="relative font-medium h-full transition py-2 before:absolute before:bottom-0 before:left-0 before:w-full before:h-0.5 before:bg-red-500 before:scale-x-0 before:origin-left before:transition-transform before:duration-400 hover:before:scale-x-100">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="relative font-medium h-full transition py-2 before:absolute before:bottom-0 before:left-0 before:w-full before:h-0.5 before:bg-red-500 before:scale-x-0 before:origin-left before:transition-transform before:duration-300 hover:before:scale-x-100">
            <Link to={"/"}>Characters</Link>
          </li>
          <li className="relative font-medium h-full transition py-2 before:absolute before:bottom-0 before:left-0 before:w-full before:h-0.5 before:bg-red-500 before:scale-x-0 before:origin-left before:transition-transform before:duration-300 hover:before:scale-x-100">
            <Link to={"/"}>Campaigns</Link>
          </li>
          <li className="relative font-medium h-full transition py-2 before:absolute before:bottom-0 before:left-0 before:w-full before:h-0.5 before:bg-red-500 before:scale-x-0 before:origin-left before:transition-transform before:duration-300 hover:before:scale-x-100">
            <Link to={"/"}>Player&apos;s Handbook</Link>
          </li>
          <li className="relative font-medium h-full transition py-2 before:absolute before:bottom-0 before:left-0 before:w-full before:h-0.5 before:bg-red-500 before:scale-x-0 before:origin-left before:transition-transform before:duration-300 hover:before:scale-x-100 ">
            <Link to={"/"}><FaAngleDown/></Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
