import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Update() {
    const navigate = useNavigate();
  let { id } = useParams();
  const [image, setImage] = useState();

  const updateData = () => {
    if (image) {
      axios
        .put(`https://67023988bd7c8c1ccd3e38fe.mockapi.io/datacontent/${id}`, {
          image: image,
        })
        .then((response) => {
          navigate("/");
        });
    }
  };

  return (
    <div className=" w-full flex flex-col justify-center items-center">
      <div className="mt-10">
        <p className="text-center font-bold text-3xl mt-3">
          You can update the image
        </p>
      </div>
      <div className="border-2 w-[40%] flex justify-center items-center gap-3 py-3 max-sm:w-[90%] mt-8">
        <input
          value={image}
          onChange={(e) => setImage(e.target.value)}
          type="text"
          placeholder="image"
          className="input input-bordered w-full max-w-xs"
        />
        <button
          onClick={updateData}
          className="btn h-10 min-h-10 bg-slate-600 text-white border-none hover:bg-gray-400 hover:text-black"
        >
          Update
        </button>
      </div>
    </div>
    // </div>
  );
}

export default Update;
