import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import './style.css'

const Info = () => {
  const [movie, setMovie] = useState("");
  const [director, setDirector] = useState("");
  const [md, setMd] = useState("");
  const [year, setYear] = useState("");
  const [objID, setObjID] = useState("");
  const [createdAt, setCreatedAt] = useState("");
  const [updatedAt, setUpdatedAt] = useState("");
  const [actor] = useState("Thalapathy vijay");

  const { id } = useParams();
  const navigation  = useNavigate();
  useEffect(() => {
    axios
      .get(`http://localhost:4000/movies/${id}`)
      .then((res) => {
        setDirector(res.data.director);
        setMovie(res.data.movie);
        setMd(res.data.musicDirector);
        setYear(res.data.releaseYear);
        setObjID(res.data._id);
        setCreatedAt(res.data.createdAt);
        setUpdatedAt(res.data.updatedAt);
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, []);

  function handleBack(){
    navigation('/')
  }
  return (
    <div className="info-container">
      <button onClick={handleBack}>back</button>
      <table>
        <tbody>
          <tr>
            <td>Movie </td>
            <td>{movie}</td>
          </tr>
          <tr>
            <td>Actor</td>
            <td>{actor}</td>
          </tr>
          <tr>
            <td>Directed By</td>
            <td>{director}</td>
          </tr>
          <tr>
            <td>Music Director</td>
            <td>{md}</td>
          </tr>
          <tr>
            <td>Release Year</td>
            <td>{year}</td>
          </tr>
          <tr>
            <td>Movie ID</td>
            <td>{objID}</td>
          </tr>
          <tr>
            <td>Db Created </td>
            <td>{createdAt}</td>
          </tr>
          <tr>
            <td>Db Updated</td>
            <td>{updatedAt}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Info;
