const objeto = (object, key, value) => {
    let obj = {};
    object = obj;   
    const name = value 
    object[key] = name;   
    
    return object;
}

console.log(objeto('customer', 'name', 'Gabriel'));


const student1 = {
    Html: 'Muito bom',
    Css: 'Bom',
    JavaScript: 'Ótimo',
    SofSkills: 'Ótimo'
};

const student2 = {
    Html: 'Bom',
    Css: 'Ótimo',
    JavaScript: 'Ótimo',
    Git: 'Bom',
};

const listSkills = student => {
    const arrayOfSkills = Object.keys(student);

    for (const index in arrayOfSkills) {
        console.log(`${arrayOfSkills[index]}, Nível: ${student[arrayOfSkills[index]]}`);        
    }
};

console.log('Estudante 1');
listSkills(student1);

console.log('Estudante 2');
listSkills(student2);
