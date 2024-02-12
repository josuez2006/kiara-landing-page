import './index.scss'

function Hero() {
  return (
    <section className="hero">
        <div className="text">
            <h1 className="heading">Cambiá el futuro de tus hijos con el <span className="text-highlighted">ingles</span></h1>
            <p className="paragraph">Abrí las puertas de tus hijos al mundo al aprender el ingles fluido.</p>
        </div>

        <div className='elements'>
            <img src="./assets/img/hero.jpg" alt="" className="img" />
            <a href="https://wa.me/5491168492899"><button className="btn-primary">Reservá una clase</button></a>
        </div>
    </section>
  )
}

export default Hero