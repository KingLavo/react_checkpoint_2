import React from 'react'
import {Card, CardImg, CardBody,  CardTitle} from "react-bootstrap"

const Player = ({player}) => {
    const { name, image, team, jerseyNumber, nationality, age } = player  
  return ( 
    <Card style={{width:"20rem", margin: "8% auto", boxShadow:"3px 4px 4px 4px #404040", color:"#404040" }} >
        <CardImg  variant="top" src={`./Images/${image}`} style={{height:"250px"}} />
        <CardBody style={{fontWeight: "bolder"}}>
            <CardTitle><h3>{name}</h3></CardTitle> 
            <h5>Team: {team}</h5>
            <p> Nationality: {nationality}</p>
            <span style={{fontWeight:"bolder"}}>Age: {age}</span>
            <p>JerseyNumber: {jerseyNumber}</p>
        </CardBody>
    </Card> 
)}

Player.defaultProps = { 
   player:{
        name: "Uduma",
        image: "",
        team: "Anong Football",
        jerseyNumber: 9,
        nationality:"Nigeria",
        age:" 31" 
   }
}

export default Player
  