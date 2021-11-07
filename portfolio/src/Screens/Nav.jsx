
import { Link } from 'react-router-dom'
import '../CSS/Nav.css'


export default function Nav() {

  return (
    // <div className='nav-container'>
    //   <div className='logo-container'>
        // <Link to='/' className='logo'>
        //   <img src='https://i.imgur.com/LIAfyJU.png' alt='logo' className='logo-pic'></img>
        // </Link>
    //   </div>
    //   <div className='links-container'>
    //     <Link to='/' className='links'>Home</Link>
    //     <Link to='/portfolio' className='links'>Projects</Link>
    //     <Link to='/about' className='links'>About</Link>
    //     <Link to='/contact' className='links'>Contact</Link>
    //     <Link to='/resume' className='links'>Resume</Link>
    //     </div>
    // </div>

    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
        <Link to='/' className='logo'>
          <img src='https://i.imgur.com/LIAfyJU.png' alt='logo' className='logo-pic'></img>
        </Link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mb-2">
          <li class="nav-item">
            <Link to='/' className='links'>Home</Link>
          </li>
          <li class="nav-item">
            <Link to='/portfolio' className='links'>Projects</Link>
          </li>
          <li class="nav-item">
            <Link to='/about' className='links'>About</Link>
          </li>
          <li class="nav-item">
            <Link to='/contact' className='links'>Contact</Link>
          </li>
          <li class="nav-item">
            <Link to='/resume' className='links'>Resume</Link>
          </li>
          {/* <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" className="links">
              Projects
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><hr class="dropdown-divider"/></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li> */}
        </ul>
      </div>
    </div>
    </nav>
  )
}