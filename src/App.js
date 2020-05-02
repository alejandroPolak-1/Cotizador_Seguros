import React, { useState } from 'react'
import Header from './components/Header'
import Form from './components/Form'
import Resume from './components/Resume'
import Result from './components/Result'
import Spinner from './components/Spinner'

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

  //carga condicional luego de agregar spinner
  const [loading, setLoading] = useState(false)

  return (
    <Conteiner>
      <Header title="Cotizador de Seguros" />
      <ConteinerForm>
        <Form 
          setResume={setResume} 
            setLoading={setLoading} />

        {loading ? <Spinner /> : null}

        <Resume 
          datas={datas} 
          />
        
        {!loading ? 
        <Result cotizacion={cotizacion} 
        /> : null}
      </ConteinerForm>
    </Conteiner>
  )
}

export default App
