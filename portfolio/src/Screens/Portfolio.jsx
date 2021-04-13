
import '../CSS/Portfolio.css'

export default function Portfolio() {
  return (
    <div className='portfolio-container'>
      <div className='proj-container'>
        <div className='proj-title'>Pets-R-Us</div>
        <a href='https://pets-r-us.netlify.app/' target='_blank' rel='noreferrer'><img src='https://i.imgur.com/cgZ15Kk.png' alt='pets-r-us' className='proj-img'></img></a>
        <div className='desc'>Pets-R-Us is a full-stack application built by myself and 3 other team members. </div>
        <div className='buttons-container'>
          <button className='code'><a href='https://github.com/jessicamyee/pets-r-us' target='_blank' rel="noreferrer">see the code</a></button>
          <button className='site'><a href='https://pets-r-us.netlify.app/' target='_blank' rel="noreferrer">see it in action!</a></button>
        </div>  
      </div>
      <div className='proj-container'>
        <div className='proj-title'>Striva</div>
        <a href='https://striva.netlify.app/' target='_blank' rel='noreferrer'><img src='https://i.imgur.com/K51bRMa.png' alt='striva' className='proj-img'></img></a>
        <div className='desc'>Striva is a mobile first full-stack web application.  </div>
        <div className='buttons-container'>
          <button className='code'><a href='https://github.com/hutchskistoke/Striva' target='_blank' rel="noreferrer">see the code</a></button>
          <button className='site'><a href='https://striva.netlify.app/' target='_blank' rel="noreferrer">see it in action!</a></button>
        </div>  
      </div>
      <div className='proj-container'>
        <div className='proj-title'>AvySavvy</div>
        <a href='https://avy-savvy-snow.netlify.app/' target='_blank' rel='noreferrer'><img src='https://i.imgur.com/86cSM8J.png' alt='avy-savvy' className='proj-img'></img></a>
        <div className='desc'>AvySavvy </div>
        <div className='buttons-container'>
          <button className='code'><a href='https://github.com/hutchskistoke/avy-savy' target='_blank' rel="noreferrer">see the code</a></button>
          <button className='site'><a href='https://avy-savvy-snow.netlify.app/' target='_blank' rel="noreferrer">see it in action!</a></button>
        </div>  
      </div>
    </div>
  )
}