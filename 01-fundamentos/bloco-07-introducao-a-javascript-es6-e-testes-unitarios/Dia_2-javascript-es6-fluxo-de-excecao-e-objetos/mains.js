const objeto = (object, key, value) => {
    let obj = {};
    object = obj;   
    const name = value 
    object[key] = name;   
    
    return object;
}

console.log(objeto('customer', 'name', 'Gabriel'));
