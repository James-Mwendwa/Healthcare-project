import {Link} from 'react-router-dom'

function Header() {
  return (
    <div>
        <Link to='/'>Hospinet</Link>
        <div className="flex">
             <Link to='/'>Home</Link>
              <Link to='/about'>About</Link>
               <Link to='/services'>Services</Link>
                <Link to='/login'>Login</Link>
        </div>
    </div>
  )
}

export default Header