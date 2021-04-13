
import {Link} from 'react-router-dom'
import '../CSS/Home.css'

export default function Home() {
  return (
    <div className='home-container'>
      <div className='name'>
        Ashley Hutchinson
      </div>
      <div className='title'>
        Software Engineer
      </div>
      <div className='home-link'>
        <Link to='/portfolio'>Explore Projects
          <img src='https://i.imgur.com/RMmN6sG.png'
            alt='next button'
            className='chevrons'
          />
        </Link>
      </div>
    </div>
  )
}