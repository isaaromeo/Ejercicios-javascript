// Probando For...in: Usa un for...in para imprimir por consola los datos del alienígena.. 
// Puedes usar este objeto:

const alien = {
    name: 'Wormuck',
    race: 'Cucusumusu',
    planet: 'Eden',
    weight: '259kg'
}
  function showAlien(alien) {
    
    for(feature in alien){
        console.log(alien[feature])
    }
    
  }


showAlien(alien)