import arrayFormat from "../data/blog.json";
const MenuPage = () => {
  const mapMethod = arrayFormat.map((map) => {
    return (
      <div>
        <div
          className="bg-white p-5 rounded flex items-center space-x-10 mb-5 "
          key={map.id}
        >
          <img src={map.url} alt="React Js Logo" className="w-28" />
          <div className="space-y-2">
            <h1 className="text-2xl font-semibold text-green-600 ">
              {map.name}
            </h1>
            <h1>{map.desc}</h1>
            <button className="bg-green-400 text-white font-semibold p-1 rounded">
              <a href="/">See More</a>
            </button>
          </div>
        </div>
      </div>
    );
  });
  return (
    <div className=" bg-green-100">
      <div>
        <h4 className="text-2xl  p-2 text-center font-semibold text-gray-700">
          Web Development Skills
        </h4>

        {mapMethod}
      </div>
    </div>
  );
};
export default MenuPage;
