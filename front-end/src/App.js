import React, { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Info from "./components/info/Info";
import Update from "./components/update/Update";
import Add from "./components/add/Add";
import Delete from "./components/delete/Delete";
const App = () => {
  const [data, setData] = useState([]);

  console.log();
  useEffect(() => {
    try {
      axios.get("http://localhost:4000/movies/all").then((res) => {
        setData(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, [data]);
  // console.log(data);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Home data ={data} />} />
          <Route path={"/info/:id"} element={<Info />} />
          <Route path={"/update/:id"} element={<Update />} />
          <Route path={"/add"} element={<Add />} />
          <Route path={"/delete/:id"} element={<Delete />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
