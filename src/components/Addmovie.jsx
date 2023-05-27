import { useRef } from "react";
import { useNavigate } from "react-router-dom";
const Addmovie = () => {

  let navigate = useNavigate()
  let moviename=useRef();
  let hero=useRef();
  let heroine=useRef();
  let director=useRef();
  let genre=useRef();
  let yor=useRef();
  let rating=useRef();
  let poster=useRef();
  let trailer=useRef();
  let synopsis=useRef();

  

  let handleAddMovie =(e)=>{
    e.preventDefault()
    
    //create new movie object
    
    // let newMovie ={
    //     moviename:moviename.current.value};
    // };

    
    let newMovie = {
        moviename: moviename.current.value,
        hero: hero.current.value,
        heroine: heroine.current.value,
        director: director.current.value,
        languages : [],
        genre: genre.current.value,
        poster: poster.current.value,
        trailer: trailer.current.value,
        release: yor.current.value,
        rating: rating.current.value,
        synopsis : synopsis.current.value,
    
      };
      
      let options=document.getElementsByName("lang");
      for (let i = 0; i < options.length; i++)
      {
        if(options[i].checked==true)
        {
          newMovie.languages.push(options[i].value)
        }
      }
      
       //send the movie obj to the database
       fetch("http://localhost:4000/movies" , 
       {
           method : "POST" ,
           headers : {"Content-Type" : "application/json"},
           body : JSON.stringify(newMovie)
       } 
       )
       .then(()=>{
        alert("New movie added to the database");
        navigate("/")
    })
          
   }

    return ( 
        <div className="add-movie">
            <h1>Add new Movie</h1>
            <form onSubmit={handleAddMovie}>
            <input type="text" required placeholder="Movie name" ref={moviename} />
                <input type="text" required placeholder="hero name" ref={hero}/>
                <input type="text" required placeholder="heroine name" ref={heroine} />
                <input type="text" required placeholder="director" ref={director} />
                <fieldset>
                    <legend>Select languages</legend>
                    <input type="checkbox" name="lang" value="kannada"/><label>Kannada</label>
                    <input type="checkbox" name="lang" value="tamil"/><label>tamil</label>
                    <input type="checkbox" name="lang" value="telagu"/><label>telagu</label>
                    <input type="checkbox" name="lang" value="malayalam"/><label>malayalam</label>
                    <input type="checkbox" name="lang" value="hindi"/><label>hindi</label>
                    <input type="checkbox" name="lang" value="english"/><label>english</label>
                </fieldset>
                <input type="text" required placeholder="Genre" ref={genre} />
                <input type="url"  required placeholder="poster link" ref={poster} />
                <input type="url"  required placeholder="trailer link" ref={trailer} />
                <input type="number" required min="1950" max="2024" placeholder="release" ref={yor} />
                <input type="number" required step="0.1" min="1" max="10" placeholder="rating" ref={rating}/>
                <textarea cols="70" required rows="6" ref={synopsis}></textarea>

                <input type="submit" value="Add movie" />
            </form>
        </div>
     );
}
 
export default Addmovie;


