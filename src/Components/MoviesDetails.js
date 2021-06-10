import React, { Component } from 'react'


export class MoviesDetails extends Component {
   
    
      state = {
        
         movie: []
      
    }

    async componentDidMount(){
        const url = "http://localhost:8000/movies";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({movie:data })

      //  console.log(data);
    }
   
    // useEffect(() =>{
    //     fetch('http://localhost:8000/movies')
    //     .then(res =>{
    //         return res.json();
    //     })
    //     .then(data => {
    //         console.log(data);
    //     })
    // }, []);
    
  render() {
      console.log(this.state.movie,"details")
    return (
      <div>

        {this.state.movie.slice(0,1).map((movies,index)=>
            <div key = {index}>
         
         <img src= {movies.poster} />
        <li>Movie Name - {movies.title}</li>
        <li>Year - {movies.year}</li>
        <li>Genre - {movies.Genre}</li>
        <li>Director - {movies.Director}</li>
        <li>Rating - {movies.rating}</li>
        
    
        </div>
        )}
        
      </div>
    )
  }
}

export default MoviesDetails
