import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function App() {
  const [info, setInfo] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const getInfo = () => {
    axios
      .get("https://67023988bd7c8c1ccd3e38fe.mockapi.io/datacontent")
      .then(function (response) {
        // handle success
        console.log(response.data);
        setInfo(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };

  const deleteData = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure to delete the item?"
    );

    if (confirmDelete) {
      axios
        .delete(`https://67023988bd7c8c1ccd3e38fe.mockapi.io/datacontent/${id}`)
        .then(() => {
          setInfo(info.filter((item) => item.id !== id));
        });
    }
  };

  const handleSearch = () => {
    if (search) {
      navigate(`/search/${search}`);
    }
  };

  useEffect(() => {
    getInfo();
  }, []);

  return (
    <div className="w-full flex justify-center items-center">
      <div className=" w-[90%] flex justify-start items-start flex-wrap gap-3 py-8 max-sm:w-[95%]">
        <div className="w-full flex flex-col justify-center items-center gap-3">
          <div className="border-2 w-[40%] flex justify-center items-center gap-3 py-3 max-sm:w-[90%]">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              placeholder="search"
              className="input input-bordered w-full max-w-xs"
            />
            <button
              onClick={handleSearch}
              className="btn h-10 min-h-10 bg-slate-600 text-white border-none hover:bg-gray-400 hover:text-black"
            >
              search
            </button>
          </div>
          <div className="border-2 w-[40%] flex justify-center items-center gap-3 py-3 max-sm:w-[90%]">
            <p className="text-xl text-black">Add New Image</p>
            <Link to="/about">
              <button className="btn h-10 min-h-10 bg-slate-600 text-white border-none hover:bg-gray-400 hover:text-black">
                +
              </button>
            </Link>
          </div>
        </div>
        {info.map((item, index) => {
          return (
            <div
              key={index}
              className="w-[24%] h-[58vh] flex flex-col justify-start items-center gap-2 border-2 max-sm:w-full"
            >
              <img src={item.image} className="w-full h-[40vh]" />
              <p className="text-xl">{item.name}</p>
              <button onClick={() => deleteData(item.id)} className="btn bg-red-950 text-white hover:bg-gray-400 hover:text-black">
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
