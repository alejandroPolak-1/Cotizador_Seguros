import React from 'react'
import styled from '@emotion/styled'
import { firstUpperCase } from './Helper'

const ConteinerResume = styled.div`
  padding: 1rem;
  text-align: center;
  background-color: #70a195;
  color: #fff;
  margin-top: 1rem;
`

const Resume = ({ datas }) => {
  //extraer de datos
  const { marca, year, plan } = datas

  //Condicional, si datos estan en blanco no carga el return
  if (marca === '' || year === '' || plan === '') return null

  return (
    <ConteinerResume>
      <h2>Resumen de Cotización</h2>
      <ul>
        <li>Marca: {firstUpperCase(marca)} </li>
        <li>Plan: {firstUpperCase(plan)} </li>
        <li>Año del Vehiculo: {firstUpperCase(year)} </li>
      </ul>
    </ConteinerResume>
  )
}

export default Resume
