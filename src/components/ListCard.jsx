import React from 'react'
import LinkIcon from '@mui/icons-material/Link';
import logo from '../logo.png';
import  bsa from '../bsa.png';
import diagnostics from '../diagnostics.png';
const ListCard = () => {
  return (
    <>
    <div className='ListCard_container'>
      <img src={logo} alt="" className='List_project_icon_img'/>
      <div className="flex-col">

    <span className='About_projectTitle'>Ping Pong Scores <span className='material-icons'><LinkIcon fontSize='small'/></span> </span>
    <span className='About_projectDescription'> This project tracks live Ping Pong scores using a Spring Boot backend, MongoDB, and a React frontend for real-time updates.</span>
      </div>
      
    </div>

    <div className='ListCard_container'>
      <img src={bsa} alt="" className='List_project_icon_img'/>
      <div className="flex-col">

    <span className='About_projectTitle'>Ping Pong Scores <span className='material-icons'><LinkIcon fontSize='small'/></span> </span>
    <span className='About_projectDescription'> This project tracks live Ping Pong scores using a Spring Boot backend, MongoDB, and a React frontend for real-time updates.</span>
      </div>
      
    </div>


    <div className='ListCard_container'>
      <img src={diagnostics} alt="" className='List_project_icon_img'/>
      <div className="flex-col">

    <span className='About_projectTitle'>Ping Pong Scores <span className='material-icons'><LinkIcon fontSize='small'/></span> </span>
    <span className='About_projectDescription'> This project tracks live Ping Pong scores using a Spring Boot backend, MongoDB, and a React frontend for real-time updates.</span>
      </div>
      
    </div>

    </>
  )
}

export default ListCard