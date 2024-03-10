import React from "react";
import { IoInformationCircleOutline } from "react-icons/io5";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import { IoAddCircleOutline } from "react-icons/io5";
import './home.css';

const Home = ({ data }) => {
  console.log(data);
  return (
    <div className="home-container">
      <div className="home-header">
        <h1>
            Movie Details
        </h1>
        <div className="add-icon">
           <Link to={'/add'}> <IoAddCircleOutline/></Link>
        </div>
      </div>
      <div className="home-body">
        <table>
          <thead>
            <th>No</th>
            <th>Movies</th>
            <th>Director</th>
            <th>Music Director</th>
            <th>Release Year</th>
            <th>Operation</th>
          </thead>
          <tbody>
            {data.map((item, index) => {
              return (
                <tr key={index} className="tr">
                  <td>{index + 1}</td>
                  <td>{item.movie}</td>
                  <td>{item.director}</td>
                  <td>{item.musicDirector}</td>
                  <td>{item.releaseYear}</td>
                  <td className="operation">
                    <Link to={`/info/${item._id}`}>
                      <IoInformationCircleOutline />
                    </Link>
                    <Link to={`/update/${item._id}`}>
                      <MdEdit />
                    </Link>
                    <Link to={`/delete/${item._id}`}>
                      <MdDelete />
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
