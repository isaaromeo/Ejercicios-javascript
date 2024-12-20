// Valores únicos: Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados, en caso que existan los 
// elimina para retornar un array sin los elementos duplicados. Puedes usar este array para probar tu función:

// pista (cuando eliminamos algo de un array, su longitud se verá afectada)

const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
  ];

function removeDuplicates(param) {

    let indexOfDuplicates=[];
    let indexOfValid = [];

    for(let i= param.length-1; i >= 0; i--){
        for(let j= param.length-1; j >= 0; j--){
            if(i != j){
                if(param[i]==param[j]){
   
                    if(!indexOfDuplicates.includes(i) && !indexOfValid.includes(i)){
                        indexOfDuplicates.push(i)
                        indexOfValid.push(j)

                    }
                    
                }   

            }
            
        
        }

    }

    for(let i= 0; i < indexOfDuplicates.length ; i++){
         console.log(indexOfDuplicates[i])
         param.splice(indexOfDuplicates[i], 1)
         console.log(param)
    }

 
    return param
}



console.log(removeDuplicates(duplicates))