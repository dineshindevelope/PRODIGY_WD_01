import { Link } from "react-router-dom";

Link;
const Navbar = () => {
  return (
    <div className="p-5 bg-blue-400">
      <div className="flex justify-between">
        <div className="text-2xl font-semibold text-white ">Dinesh Blog</div>
        <div>
          {" "}
          <ul className="flex  justify-end space-x-10 font-semibold ">
            <li className="bg-white p-2 rounded hover:bg-gray-800 hover:text-white">
              <Link to={"/"}>Home</Link>
            </li>
            <li className="bg-white p-2 rounded hover:bg-gray-800 hover:text-white">
              <Link to={"/about"}>Projects</Link>
            </li>
            <li className="bg-white p-2 rounded hover:bg-gray-800 hover:text-white">
              <Link to={"/contact"}>Contact</Link>
            </li>

            <li className="bg-white p-2 rounded hover:bg-gray-800 hover:text-white">
              <a
                href="https://github.com/dineshindevelope/PRODIGY_WD_01"
                target="blank"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
