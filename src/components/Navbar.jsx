import 'bootstrap/dist/css/bootstrap.css'
import img from "./img/image.png"
const Navbar = () => {
  return (
    <header>
   <nav className="navbar">
  <div className="container mt-5">
  <img src={img} alt="Bootstrap" width="120" height="120"/>
    <a className="navbar-brand fs-1">Antik Gezgin</a>
    <form className="d-flex" role="search">
      <input className="form-control me-2" type="search" placeholder="Ara..." aria-label="Search"style={{width:"350px", height:"40px", backgroundColor:"transparent"}}/>
      <button className="btn btn-outline-black fs-3" type="submit" >Search</button>
    </form>
  </div>
</nav>

    </header>
  )
}

export default Navbar