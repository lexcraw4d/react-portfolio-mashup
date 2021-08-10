import React from 'react'
import localHeroes from '../../Assets/localheros2.jpeg'
import gameinator from '../../Assets/gameinator.jpeg'
import { Card, Button } from 'react-bootstrap'

const Projects = () => {
    return (
<div className="projects">
      
      <div>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={localHeroes} />
        <Card.Body>
          <Card.Title>Local Heroes</Card.Title>
          <Card.Text>
          Local Heroes is an application designed to connect travelers to locals with similiar interests to collaborate and journey together through unique and authentic experiences. In this project I created the backend using Node.js, Express, Handlebars, MySQL, JawsDB, Sequelize, secure authentication and login via bcrypt, cookie-parser, JWT (JSON Web Token). Time to hit the road and meet some local heroes!
          </Card.Text>
          <Button variant="primary" href="https://localheroes21.herokuapp.com/">Try Local Heroes Here!</Button>
        </Card.Body>
      </Card>
      </div>
      <div>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={gameinator} />
        <Card.Body>
          <Card.Title>Gaminator</Card.Title>
          <Card.Text>
          Not sure what to play next?!? Rest at ease and let Gamintor make your next video game choice! Just enter in the required fields and viola! all your game recommendations are returned. Along with your game is a YouTube video tutorial or information about the game. Can't pick between the two? Quickly add to your favorites and we'll do the rest. Now, go get your game on!
          </Card.Text>
          <Button variant="primary" href="https://lexcraw4d.github.io/Gaminator/">Try Gaminator Here!</Button>
        </Card.Body>
      </Card>
      </div>
</div>
      
    )
}

export default Projects
