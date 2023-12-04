import 'bootstrap/dist/css/bootstrap.css'
const Navbar = () => {
  return (
    <header>
   <nav className="navbar">
  <div className="container mt-5">
    <a className="navbar-brand">Antik Gezgin</a>
    <form className="d-flex" role="search">
      <input className="form-control me-2" type="search" placeholder="Ara..." aria-label="Search"style={{width:"300px", height:"40px"}}/>
      <button className="btn btn-outline-black" type="submit" >Search</button>
    </form>
  </div>
</nav>

    </header>
  )
}

export default Navbar