import React, { Fragment } from 'react'

const Resume = ({ datas }) => {
  //extraer de datos
  const { marca, year, plan } = datas

  //Condicional, si datos estan en blanco no carga el return
  if (marca === '' || year === '' || plan === '') return null

  return (
    <Fragment>
      <h2>Resumen de Cotización</h2>
      <ul>
        <li>Marca: </li>
        <li>Plan: </li>
        <li>Año: </li>
      </ul>
    </Fragment>
  )
}

export default Resume
