import React from "react"
import {Image, Container } from 'react-bootstrap';
import profileImg from '../../Assets/profilepic.jpg'

const About = () => {
    return (
    <section className= "m-5 about hero">
    <Container className="bio-container">
        <div className="bio">
        <h1> Hello, I'm Lex</h1>
        <h2>Full Stack Developer</h2>
        </div>

    <div>
      <Image src={profileImg} rounded />
    </div>
    </Container>
    <div>Experienced Full Stack Developer with a demonstrated history of working in the Web Development industry. Skilled in HTML, CSS, JavaScript, Bootstrap, Express, Node.js, React, Git, GitHub, node.js, relational databases, npm, Heroku, MySQL, ORM, ODM, MVC, NoSQL, Object Oriented Programming,  Markdown, Adobe Lightroom/Photoshop, Teaching, Project and Time Management, Photography, Microsoft, Computer Literacy, and Team Lead. 
    
    Strong education and professional holding three degrees in: Master of Arts - MA focused in Elementary Education and Teaching, B.S. Business Administration, and Associates in Pharmacy Technology. 
    As an experienced Full-Stack  Web Developer, I am skilled at programming dynamic and versatile web applications. I am a dedicated team player that brings positive energy, integrity, and strong critical thinking problem solving skills. I am looking to maximize productivity, minimize system down time, and achieve established goals.</div>
    </section >

    )
}

export default About
