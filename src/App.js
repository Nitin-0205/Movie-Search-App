import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { faGrinBeamSweat } from "@fortawesome/free-regular-svg-icons";
import "./index.css"
import Header from "./components/Header";
import Footer from "./components/Footer";


function App() {

  let [movieinfo,setMovieinfo] =useState(null);
  let [title,setTitle] = useState("galaxy");


  useEffect(()=>{
    getmoviedata();

  },[]);

  const getmoviedata =()=>{

    let url =  `https://www.omdbapi.com/?t=${title} &apikey=ad679b1a`;

    fetch(url)
    .then((response)=> response.json())
    
    .then((movie)=> {
      setMovieinfo(movie);
    })

    .catch((err)=>{
      console.log(err)
    })
    
  }

  return (
    <div className="App">
      <Header/>
      <div className="container">
        <div className="padd">
          <div className = "movie_ent_container">
            <input type="text" className="movie_field" value ={title} onChange={(event)=>{setTitle(event.target.value);}} placeholder="Enter Movie"></input>
            <button className="search_btn" onClick = {getmoviedata} >Search</button>
          </div>
          {
            movieinfo?.Error === undefined?(
              <div className="movie">
              <div className="poster">
                <img src={movieinfo?.Poster} alt="&#x1F631; Movie Poster" />
              </div>
              <div className="movie_desc">
                <h1>{movieinfo?.Title}</h1>
                <p><span>Year :</span>{movieinfo?.Year}</p>
                <p><span>Genre :</span>{movieinfo?.Genre}</p>
                <p><span>Released :</span>{movieinfo?.Released}</p>
                <p><span>Writer :</span>{movieinfo?.Writer}</p>
                <p><span>Actors :</span>{movieinfo?.Actors}</p>
                <p><span>Language :</span>{movieinfo?.Language}</p>
                <p><span>Director :</span>{movieinfo?.Director}</p>
                <p><span>Plot :</span>{movieinfo?.Plot}</p>
  
                <div className = "rating">
                  <table>
                    <tbody>
                    <tr>
  
                      {movieinfo?.Ratings.map((rating, index) => {
                        return <th>{rating.Source}</th>
                      })}
  
                    </tr>
                    <tr>
                      {movieinfo?.Ratings.map((rating, index) => {
                        return <td>{rating.Value}</td>
                      })}
                    </tr>
                    </tbody>
  
                  </table>
                </div>
              </div>
            </div>
            
              ):(<h1 className = "MovieNot">Movie Not Found <br/><span> <FontAwesomeIcon icon = {faGrinBeamSweat} ></FontAwesomeIcon></span></h1>)
          }
        </div>
      </div>
      <Footer/>
    </div>
  );
}
export default App;
