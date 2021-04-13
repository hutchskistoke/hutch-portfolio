
import { Link } from 'react-router-dom'
import '../CSS/Nav.css'


export default function Nav() {
  return (
    <div className='nav-container'>
      <div className='logo-container'>
        <Link to='/' className='logo'>
          <img src='https://i.imgur.com/LIAfyJU.png' alt='logo' className='logo-pic'></img>
        </Link>
      </div>
      <div className='links-container'>
        <Link to='/' className='links'>Home</Link>
        <Link to='/portfolio' className='links'>Projects</Link>
        <Link to='/about' className='links'>About</Link>
        <Link to='/contact' className='links'>Contact</Link>
        <Link to='/resume' className='links'>Resume</Link>
        </div>
    </div>
  )
}