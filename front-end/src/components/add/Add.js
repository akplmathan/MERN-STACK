import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './style.css'

const Add = () => {
    const[movie,setMovie] = useState('');
    const[director,setDirector] = useState('');
    const[md,setMd] = useState('');
    const[year,setYear] = useState('')

    const navigate = useNavigate()
    const createMovie=async()=>{
        
        if(!movie || !director || !md || !year){
            alert('fill the required fields')
        }else{
                
            const data = {
                movie: movie,
                 director:director,
                 musicDirector:md,
                 releaseYear:year
             };
             axios
             .post('http://localhost:4000/movies',data)
             .then(()=>{
                 navigate('/');
                 alert('movie created SuccessFully')
             }).catch((error)=>{
                 console.log(error);
             })
             
                     
        }
    }
  return (
    <div className='add-container'>
        <div className='box'>
        <div>
            <label htmlFor="">Movie Name </label>
            <input type="text" value = {movie} onChange={e => setMovie(e.target.value)} />
        </div>
        <div>
            <label htmlFor="">Director Name </label>
            <input type="text" value = {director} onChange={e => setDirector(e.target.value)} />
        </div>
        <div>
            <label htmlFor="">Music Director</label>
            <input type="text" value = {md} onChange={e => setMd(e.target.value)} />
        </div>
        <div>
            <label htmlFor="">Release Year </label>
            <input type="number" value = {year} onChange={e => setYear(e.target.value)} />
        </div>
        <button onClick={createMovie}>Create movie</button>
        </div>
    </div>
  )
}

export default Add