import './index.scss'

function Conversion() {
  return (
    <section className="section | conversion">
        <img src="./assets/img/conversion-left.jpg" alt="" className="img rounded" />
        <div className="content">
            <div className="text">
                <h2 className="title">Prepará a tus hijos para <span className="text-highlighted">un futuro mejor</span></h2>
                <p className="paragraph">Es el momento para formar a tus hijos para que alcancen la fluidez en ingles.</p>
            </div>
            <a href="https://wa.me/5491168492899"><button className="btn-primary">Reservá una clase</button></a>
        </div>
        <img src="./assets/img/conversion-right.jpg" alt="" className="img rounded img-right" />
    </section>
  )
}

export default Conversion