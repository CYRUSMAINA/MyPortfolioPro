import { NavLink, Outlet } from "react-router-dom";
import Logo from './Logo'; 

export default function Layout({ user, onLogout }) {
  return (
    <div className="layout">
     <header>
  {/* Logo + Title Row */}
  <div className="logo-title-row">
    <Logo className="logo" />
    <h1 className="site-title">My Portfolio</h1>
  </div>

  {/* Tech Images Row */}
  <div className="tech-background">
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="tech-logo" />
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" className="tech-logo" />
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" className="tech-logo" />
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="Docker" className="tech-logo" />
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" className="tech-logo" />
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="tech-logo" />
  </div>
</header>


      {/* Navigation */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink className="navbar-brand" to="/">Home</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mr-auto">
            <li className='nav-item'><NavLink className='nav-link' to="/about">About</NavLink></li>
            <li className='nav-item'><NavLink className='nav-link' to="/service">Service</NavLink></li>
            <li className='nav-item'><NavLink className='nav-link' to="/projects">Projects</NavLink></li>
            <li className='nav-item'><NavLink className='nav-link' to="/contacts">Contacts</NavLink></li>
            <li className='nav-item'><NavLink className='nav-link' to="/experience">Experience</NavLink></li>
          </ul>
          <ul className='navbar-nav ml-auto'>
            {user ? (
              <li className='nav-item d-flex align-items-center'>
                <span className='navbar-text me-3'>Hello, {user.username}</span>
                <button className='btn btn-outline-danger' onClick={onLogout}>Logout</button>
              </li>
            ) : (
              <>
                <li className='nav-item'><NavLink className='nav-link' to="/register">Register</NavLink></li>
                <li className='nav-item'><NavLink className='nav-link' to="/login">Login</NavLink></li>
              </>
            )}
          </ul>
        </div>
      </nav>

      {/* Page Content */}
      <main className="container mt-4">
        <Outlet />
      </main>
    </div> 
  );
}
