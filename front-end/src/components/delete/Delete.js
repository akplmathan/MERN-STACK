import axios from "axios";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import './style.css'

const Delete = () => {
  const { id } = useParams();
  const navigation = useNavigate();
console.log(id);
  function handleDelete() {
    axios
      .delete(`http://localhost:4000/movies/${id}`)
      .then((res) => {
        console.log(res.data);
        navigation("/");
      })
      .catch((e) => {
        console.log(e);
      });
  }
function handleBack(){
  navigation('/')
}

  return (
    <div className="del-container">
      <div className="box">
        <h2>Are you Delete this Movie?</h2>
       <div>
        <button className='cancel' onClick={handleBack}>Cancel</button>
       <button onClick={handleDelete}>Delete </button>
       </div>
      </div>
    </div>
  );
};

export default Delete;
