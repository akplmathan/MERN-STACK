import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "../add/style.css";

const Add = () => {
  const [movie, setMovie] = useState("");
  const [director, setDirector] = useState("");
  const [md, setMd] = useState("");
  const [year, setYear] = useState("");
  const [data,setData] = useState();

  const navigate = useNavigate();
  const { id } = useParams()
  // console.log(id);

  useEffect(() => {
    axios.get(`http://localhost:4000/movies/${id}`).then((res) => {
      setMovie(res.data.movie);
      setDirector(res.data.director);
      setMd(res.data.musicDirector);
      setYear(res.data.releaseYear)
    
    }).catch((e)=>{
      console.log(e);
    })
  }, []);
  // console.log(movie);
  const EditMovie = async () => {
    const data = {
      movie: movie,
      director: director,
      musicDirector: md,
      releaseYear: year,
    };
    axios
      .put(`http://localhost:4000/movies/${id}`, data)
      .then(() => {
        navigate("/");
        alert("movie Updated SuccessFully");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="add-container">
      <div className="box">
        <div>
          <label htmlFor="">Movie Name </label>
          <input
            type="text"
            value={movie}
            onChange={(e) => setMovie(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="">Director Name </label>
          <input
            type="text"
            value={director}
            onChange={(e) => setDirector(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="">Music Director</label>
          <input
            type="text"
            value={md}
            onChange={(e) => setMd(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="">Release Year </label>
          <input
            type="number"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
        </div>
        <button onClick={EditMovie}>Update movie</button>
      </div>
    </div>
  );
};

export default Add;
