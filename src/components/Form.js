import React from 'react'

const Form = () => {
  return (
    <form>
      <div>
        <label>Marca </label>
        <select>
          <option value=" ">--Select--</option>
          <option value=" ">Americano</option>
          <option value=" ">Europeo</option>
          <option value=" ">Asiatico</option>
        </select>
      </div>

      <div>
        <label>Modelo </label>
        <select>
          <option value="">-- Select --</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
          <option value="2016">2016</option>
          <option value="2015">2015</option>
          <option value="2014">2014</option>
          <option value="2013">2013</option>
          <option value="2012">2012</option>
          <option value="2012">2011</option>
          <option value="2012">Otro</option>
        </select>
      </div>

      <div>
        <label>Plan </label>
        <input type="radio" name="plan" value="basico" /> Basico
        <input type="radio" name="plan" value="completo" /> Completo
      </div>

      <button type="button">Cotizar</button>
    </form>
  )
}

export default Form
