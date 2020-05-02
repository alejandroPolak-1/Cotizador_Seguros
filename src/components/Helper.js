//Obtiene la diferencia de años
export function getDifferenceYear(year) {
  return new Date().getFullYear() - year
}

//calcula el total a pagar segun la marca
export function getMarca(marca) {
  let increment;

  switch (marca) {
    case 'europeo':
      increment = 1.3
      break
    case 'americano':
      increment = 1.15
      break
    case 'asiatico':
      increment = 1.05
      break

    default:
      break
  }
  return increment
}


//Calcular el tipo de seguro

export function getPlan (plan) {
  return (plan === 'basico') ? 1.2 : 1.5
}

//Muestra primer letra en mayuscula
export function firstUpperCase( text){
  return text.charAt(0).toUpperCase() + text.slice(1)
}