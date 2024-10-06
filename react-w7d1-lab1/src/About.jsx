import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function About() {
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const postData = () => {
    axios
      .post("https://67023988bd7c8c1ccd3e38fe.mockapi.io/datacontent", {
        image: image,
        name: name,
        gender: gender,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const postButton = () => {
    setMessage("");
    if (image !== "" && name !== "" && gender !== "") {
      postData();
      navigate('/');
    } else {
      setMessage("Please Fill the fieldes!");
    }
  };

  return (
    <div className=" w-full h-screen flex justify-center items-center">
      <div className="w-[40%] h-[80%] bg-white rounded-xl max-sm:w-[90%] max-sm:h-[65%]">
        <div className="card-body">
          <h1 className="font-bold text-2xl text-black text-center">
            Add New Image
          </h1>
          <div className="form-control">
            <label className="label">
              <span className="label-text">image</span>
            </label>
            <input
              value={image}
              onChange={(e) => {
                setImage(e.target.value);
              }}
              type="text"
              placeholder="text"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">name</span>
            </label>
            <input
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              type="text"
              placeholder="name"
              className="input input-bordered"
              required
            />
            <label className="label">
              <span className="label-text">gender</span>
            </label>
            <input
              value={gender}
              onChange={(e) => {
                setGender(e.target.value);
              }}
              type="text"
              placeholder="male/female"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button
              onClick={postButton}
              className="btn bg-green-900 text-white hover:bg-slate-300 hover:text-black"
            >
              Add
            </button>
          </div>
          {message && (
            <p className="text-center text-red-900 font-bold text-[0.8rem]">{message}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default About;
