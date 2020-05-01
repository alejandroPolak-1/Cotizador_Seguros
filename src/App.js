import React from 'react'
import Header from './components/Header'

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
  return (
    <Conteiner>
      <Header title="Cotizador de Seguros" />
      <ConteinerForm>
        
      </ConteinerForm>
    </Conteiner>
  )
}

export default App
