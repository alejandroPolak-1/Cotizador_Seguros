import React, { useState } from 'react'
import Header from './components/Header'
import Form from './components/Form'
import Resume from './components/Resume'
import Result from './components/Result'

import styled from '@emotion/styled'

const Conteiner = styled.div`
  max-width: 600px;
  margin: 0 auto;
`
const ConteinerForm = styled.div`
  background-color: #fff;
  padding: 3rem;
`

function App() {
  const [resume, setResume] = useState({
    cotizacion: 0,
    datas: {
      marca: '',
      year: '',
      plan: '',
    },
  })

  //extraer datos
  const { cotizacion, datas } = resume

  return (
    <Conteiner>
      <Header title="Cotizador de Seguros" />
      <ConteinerForm>
        <Form setResume={setResume} />
        <Resume 
        datas= {datas}/>
        <Result
        cotizacion={cotizacion}
        />
        
      </ConteinerForm>
    </Conteiner>
  )
}

export default App
