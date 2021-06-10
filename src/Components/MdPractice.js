import React, { Component } from 'react'
import styled from 'styled-components'
import a from './images/abc.jpg'
import b from './images/def.jpg'


const Des = styled.h3`
  font-size: 20px;
  text-align: left;
  color: #00FF00;
  padding: 1px;
  margin:0;
`;

const Ss = styled.h3`
  font-size: 20px;
 
  color: #00FF00;
  padding: 1px;
  margin:0;
  float:right;
`;

const Title = styled.h1`
  font-size: 40px;
  text-align: centre;
  color: White;
`;
const Abc = styled.p`
  font-size: 15px;
  text-align: left;
  color: White;
  align-items: center;
  padding: 1px;
  margin:0;
`;

const Def = styled.p`
  font-size: 15px;
 
  color: White;
  align-items: center;
  padding: 1px;
  margin:0;
  float:right;
`;

const Button = styled.button`
background: "black";
color : rgba(0,0,0, 0.8);
`;




const Wrapper = styled.section`
  padding: 30px;
  margin: auto;
  background-color: rgba(0,0,0, 0.8);
  box-sizing: border-box;
  width:60%;
  align: centre
  
  
`;

const Inpt= styled.p`
background-color: black;
margin: auto;
outline: none;
position: relative;
width:60%


`;






export class MdPractice extends Component {
    
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

   




   render() {
    console.log(this.state.movie,"details")
  return (
    <div style={{
      backgroundImage: `url(${b})`, backgroundSize:"cover", padding:'70px'
    }}>
    
    <Inpt>
    <input type="text"></input>
    <Button>search movie</Button>
    </Inpt>

      {this.state.movie.slice(0,1).map((movies,index)=>
          <div key = {index}>
          

          <Wrapper>
       
       <img src= {a} align = "left" width = "260px"/>
       <Title>{movies.title}</Title>

       <Des>Description:</Des>
       <Abc>{movies.description}</Abc>
       

       
       <Des>Release:  
       <Ss>Director:</Ss>
       </Des>

       <Abc>{movies.year}  
       <Def>{movies.Director}</Def>
       </Abc>

       <Des>Genre:  
       <Ss>Rating:</Ss>
       </Des>
      <Abc> {movies.Genre}
      <Def>{movies.rating}</Def>
      </Abc>
      
     
      
      

      
      
      
      
      </Wrapper>
  
      </div>
    
      )}
      
    </div>
  )
}
}

export default MdPractice
