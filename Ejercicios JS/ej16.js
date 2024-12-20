// Probando For...of: Usa un bucle forof para recorrer todos los destinos del array.
// Imprime en un console.log sus valores.

// Puedes usar este array:

const placesToTravel = ['Japon', 'Venecia', 'Murcia', 'Santander', 'Filipinas', 'Madagascar']


  function showPlaces(list) {

    for(const place of list){
      console.log(place)
    }
    
  }

showPlaces(placesToTravel)