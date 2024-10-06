import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Search() {
  const [info, setInfo] = useState([]);
  let { keyword } = useParams();

  const getInfo = () => {
    axios
      .get("https://67023988bd7c8c1ccd3e38fe.mockapi.io/datacontent")
      .then(function (response) {
        // handle success
        console.log(response.data);
        const filteredData = response.data.filter(
          (item) => item.name === keyword
        );
        setInfo(filteredData);
      })

      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };

  useEffect(() => {
    getInfo();
  }, []);

  return (
    <div className=" w-full flex flex-col justify-center items-center">
      <div>
        <p className="text-center font-bold text-3xl mt-3">The results of the keyword: {keyword}</p>
      </div>
      <div className=" w-[90%] flex justify-start items-start flex-wrap gap-3 py-8 max-sm:w-[95%]">
        {info.length > 0 ? (
          info.map((item, index) => {
            return (
              <div
                key={index}
                className="w-[24%] h-[60vh] flex flex-col justify-start items-center gap-2 border-2 max-sm:w-full"
              >
                <img src={item.image} className="w-full h-[40vh]" />
                <div className="divider my-0 py-0"></div>
                <p className="text-xl">{item.name}</p>
                <p className="text-xl">{item.gender}</p>
                
              </div>
            );
          })
        ) : (
          <div className="w-full h-screen">
            <p className="text-center font-bold text-4xl mt-20">oops</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Search;
