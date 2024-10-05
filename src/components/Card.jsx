import React from 'react'
import logo from "../logo.png"
const Card = (props) => {
    const logo=props.logo;
    const title=props.title;
    const description=props.description;
    const published=props.published;
    const link=props.link;
    // const published=true;

    
  return (
    <a href={link} target='_blank'>

    <div className='Card_container'>
        
            <img src={logo} alt="" className='Card_project_icon_img'/>
     
        <div className="Card_project_title">
            {title}
        </div>
        <div className="Card_project_description">
            {description}
        </div>
        <div className='flex'> 
            {published?<> <button className='Card_button'>Link</button>
                <button className='Card_button2'>Github</button> </>:
                <>
        <button className='Card_button'>Github</button></>}
       
        </div>
    </div>
                </a>
  )
}

export default Card