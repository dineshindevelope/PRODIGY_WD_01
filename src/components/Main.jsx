import React from "react";
import projectList from "../data/project.json";

const MainPage = () => {
  const projectListMethod = projectList.map((map) => {
    return (
      <div className="flex items-center bg-gray-300 rounded-xl gap-2">
        <div>
          <img src={map.url} alt="WhatsApp logo" className="w-64 p-2" />
        </div>
        <div className="bg-green-200 p-10 rounded-xl">
          <div className="flex space-x-5 ">
            <h1 className="font-semibold font-serif">Title :</h1>
            <p>{map.title}</p>
          </div>
          <h1 className="font-semibold mt-5 font-serif ">Description :</h1>
          <p className="text-gray-800">{map.desc}</p>
          <div className="flex justify-around pt-3 mt-2">
            <button className="bg-blue-500 p-2 rounded-lg font-semibold text-gray-800 hover:bg-blue-600 hover:text-white">
              <a href={map.live} target="blank">
                Live Link
              </a>
            </button>
            <button className="bg-blue-500 p-2 rounded-lg font-semibold text-gray-800 hover:bg-blue-600 hover:text-white">
              <a href={map.repo} target="blank">
                Project Repo
              </a>
            </button>
          </div>
        </div>
      </div>
    );
  });
  return (
    <div className="bg-green-100">
      <div>
        <div>
          <h1 className="text-5xl  font-serif text-blue-700 text-center p-5">
            Tailwind CSS Projects
          </h1>
        </div>
        <div className="grid grid-cols-2 gap-10 p-5">{projectListMethod}</div>
      </div>
    </div>
  );
};

export default MainPage;
