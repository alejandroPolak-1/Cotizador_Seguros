import React from 'react'
import styled from '@emotion/styled'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

const Message = styled.p`
  background-color: rgb(127, 224, 237);
  margin-top: 2rem;
  padding: 1rem;
  text-align: center;
`

const ResultCotización = styled.div`
  text-align: center;
  padding: 0.5rem;
  border: 1px solid #26c6da;
  background-color: rgb(9, 213, 232);
  margin-top: 1rem;
  position: relative;
`

const TextCotizacion = styled.p`
  color: #00838f;
  padding: 1rem;
  text-transform: uppercase;
  font-weight: bold;

  margin: 0;
`

const Result = ({ cotizacion }) => {
  return cotizacion === 0 ? (
    <Message>Elige marca, año y tipo de seguro</Message>
  ) : (
    <ResultCotización>
      <TransitionGroup component="p" className="resultado">
        <CSSTransition
          classNames="resultado"
          key={cotizacion}
          timeout={{ enter: 500, exit: 500 }}
        >
          <TextCotizacion> El total es: $ {cotizacion} </TextCotizacion>
        </CSSTransition>
      </TransitionGroup>
    </ResultCotización>
  )
}

export default Result
