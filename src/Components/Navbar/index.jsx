import './index.scss'

function Navbar() {
  return (
    <nav className="nav">
        <span className="logo">Profe Kiara</span>
        <button className="btn-icon bg-secondary"><img src="./assets/icons/Phone.svg" alt="" /></button>
        <button className="btn-secondary btn-text">Reservá una clase</button>
    </nav>
  )
}

export default Navbar