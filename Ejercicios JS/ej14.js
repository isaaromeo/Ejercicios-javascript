// Contador de repeticiones: Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma.
// Puedes usar este array para probar tu función:


const counterWords = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'upgrade',
    'code'
  ];
  function repeatCounter(list) {
    let numberOfRep = [];

    for(let i = 0; i < list.length; i++){
        // let count = 0; 
        //Si dejamos count en 0 nos saldrá el número de repetciones de un elemento sin contar la primera aparición del mismo
        let count = 1;
        //Si ponemos count a 1 contamos el propio elemento como una repetición. Creo que tiene más sentido ya que si yo cuento
        //en la lista cuantas veces aparece code lo lógico es decir que aparece 4 veces, no que se repite 3

        for(let j = 0; j < list.length; j++){
            if(i != j){
                if(list[i] == list[j]){
                    count ++;
                }

            }
        }

        numberOfRep.push(count);
    }

    return numberOfRep;
  }

console.log(repeatCounter(counterWords))