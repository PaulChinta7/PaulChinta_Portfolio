import React from 'react'
import Card from './components/Card';
import logo from '../src/logo.png';
import  bsa from '../src/bsa.png';
import diagnostics from '../src/diagnostics.png';


const AboutMe = () => {

    const flag=false;
  return (<>
  <div className="strip"></div>
    <div className='About_container'>
       <span className='About_name'>Preetham Paul Chinta</span> 
       <p className='About_description'>
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; As a Software Engineer with extensive experience in Java and full-stack development, I specialize in designing scalable applications and optimizing performance through innovative solutions. My expertise encompasses a wide range of technologies, including Spring Boot, microservices, and various frontend frameworks, allowing me to lead complex projects from conception to deployment.
<br />
<br />
Currently, I focus on transforming monolithic applications into efficient microservices, enhancing data handling, and streamlining workflows. I am passionate about leveraging cloud technologies and containerization to deliver high-quality, resilient software that meets dynamic user needs.



       </p>

       <span  className='About_subheading'>Projects</span>
       <ul>
        <li>Python</li>
        <li>Java</li>
        <li>Springboot</li>
       </ul>
        <span  className='About_subheading'>Projects</span>
{flag?<>  <ul>
            <li><span className='About_projectTitle'>Ping Pong Scores</span><br /><span className='About_projectDescription'> This project tracks live Ping Pong scores using a Spring Boot backend, MongoDB, and a React frontend for real-time updates.</span></li>
            <li><span className='About_projectTitle'>Blog Sentiment Analysis</span><br /><span className='About_projectDescription'> The Blog Sentiment Analysis Platform uses Spring Boot, Flask, and React to evaluate and display comments sorted by sentiment.</span></li>
            <li><span className='About_projectTitle'>Diagnostics App</span><br /><span className='About_projectDescription'> The application is a monolithic lab test sales system built with Spring Boot and React, using Redux, PostgreSQL, and Kafka for handling orders and results.</span></li>
        </ul></>:<>
        <div className="About_cardContainer">
        <Card published={true} link={"https://pingpongfrontend-render.onrender.com/"} logo={logo} title={"Ping Pong Scores"} description={" This project tracks live Ping Pong scores using a Spring Boot backend, MongoDB, and a React frontend for real-time updates."}/>
        <Card published={false} logo={bsa} title={"Blog Sentiment "} description={"The Blog Sentiment Analysis Platform uses Spring Boot, React to evaluate comments, displays them sorted from positive to negative."}/>
        <Card published={false} logo={diagnostics} title={"Diagnostics App"} description={" Monolithic lab test sales system built with Spring Boot and React, Redux, PostgreSQL, Kafka for handling orders and results."}/>
        </div>
        </>}

      

        <span  className='About_subheading'>Get in touch</span>
        <div className="About_getInTouch">

        <ul>
            <li> <a href="https://www.linkedin.com/in/paulchinta/">LinkedIn </a></li>
            <li> <a href="https://github.com/PaulChinta7" target='_blank'>Github </a></li>
            <li> <a href="">Discord</a></li>
            <li> <a href="paulchinta7@gmail.com">Email</a></li>
            
        </ul>
        </div>

    </div>
  </>
  )
}

export default AboutMe