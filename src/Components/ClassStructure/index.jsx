function ClassStructure() {
  return (
    <section className="section bg-secondary | class-structure">
        <h2 className="title">¿Cómo funcionan las clases?</h2>

        <div className="cards">
          <div className="rounded bg-primary | card">
            <div className="number heading rounded">1</div>
            <h3 className="subtitle">Despertamos la curiosidad</h3>
          </div>

          <div className="rounded bg-primary | card">
            <div className="number heading rounded">2</div>
            <h3 className="subtitle">Estudiamos la teoría</h3>
          </div>

          <div className="rounded bg-primary | card">
            <div className="number heading rounded" aria-active='true'>3</div>
            <h3 className="subtitle">Jugamos y aprendemos</h3>
          </div>
        </div>
    </section>
  )
}

export default ClassStructure