import { useEffect, useState } from "react"

function ClassStructure() {
  const [firstSelected, setFirstSelected] = useState(true)
  const [secondSelected, setSecondSelected] = useState(false)
  const [thirdSelected, setThirdSelected] = useState(false)

  useEffect(() => {
    let myInterval =
    setInterval(() => {
      if (firstSelected) {
        setSecondSelected(true)
        setFirstSelected(false)
      } 
      
      else if (secondSelected) {
        setThirdSelected(true)
        setSecondSelected(false)
      }

      else if (thirdSelected) {
        setFirstSelected(true)
        setThirdSelected(false)
      }

    }, 1500)

    return () => {
      clearInterval(myInterval)
    }
  })
  return (
    <section className="section bg-secondary | class-structure">
        <h2 className="title">¿Cómo funcionan las clases?</h2>

        <div className="cards">
          <div className="rounded bg-primary | card">
            <div className="number heading rounded" aria-selected={firstSelected}>1</div>
            <h3 className="subtitle">Despertamos la curiosidad</h3>
          </div>

          <div className="rounded bg-primary | card">
            <div className="number heading rounded"aria-selected={secondSelected}>2</div>
            <h3 className="subtitle">Estudiamos la teoría</h3>
          </div>

          <div className="rounded bg-primary | card">
            <div className="number heading rounded" aria-selected={thirdSelected}>3</div>
            <h3 className="subtitle">Jugamos y aprendemos</h3>
          </div>
        </div>
    </section>
  )
}

export default ClassStructure