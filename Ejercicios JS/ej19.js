// Mixed For e includes: Usa un bucle for para recorrer todos los juguetes y elimina los que incluyan la palabra gato. 
// Recuerda que puedes usar la función .includes() para comprobarlo. Puedes usar este array:

    const toys = [
    {id: 5, name: 'Buzz MyYear'}, 
    {id: 11, name: 'Action Woman'}, 
    {id: 23, name: 'Barbie Man'}, 
    {id: 40, name: 'El gato con Guantes'},
    {id: 40, name: 'El gato felix'}
    ]



    let indexOfDeleted = [];

    for(const toy of toys){

        if(toy.name.includes("gato")){
            indexOfDeleted.push(toys.indexOf(toy))
        }
    

        }
            
    
    

    for(let i = indexOfDeleted.length -1; i >= 0; i--){
        toys.splice(indexOfDeleted[i], 1);
    }


  console.log(toys)