
import { Link } from "react-router-dom"

export function Navbar() {
  return (
    <>
      <div className="center">
        <Link to='/About'>
          <button className="item">About</button>
        </Link>
        <Link to='/'>
          <button className="item">Home</button>
        </Link>
      </div>
    </>
  )
}
