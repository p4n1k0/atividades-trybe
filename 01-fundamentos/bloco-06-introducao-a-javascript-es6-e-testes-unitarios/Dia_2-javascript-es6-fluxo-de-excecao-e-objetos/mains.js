const verifyIsNumber = (value1, value2) => {
    if (typeof value1 !== 'number' || typeof value2 !== 'number') {
      throw new Error('Os valores devem ser numéricos');
    }
  };
  
  const sum = (value1, value2) => {
    try {
      verifyIsNumber(value1, value2);
      return value1 + value2;
    } catch (error) {
      throw error.message;
    }
  };
  
  console.log(sum(2, '3'));

const objet = (object, key, value) => {
    let obj = {};
    object = obj;   
    const name = value 
    object[key] = name;   
    
    return object;
}

console.log(objet('customer', 'name', 'Gabriel'));


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



const países = {
  França: 'Paris',
  Brasil: 'Brasília',
  Espanha: 'Madrid',
  Portugal: 'Lisboa',
};
const pairKeyValue = Object.entries(países);
console.log(pairKeyValue);

for(index in pairKeyValue) {
  console.log('--------');
  console.log('País:', pairKeyValue[index][0]);
  console.log('Capital:', pairKeyValue[index][1]);
};




const person = {
  name:'Roberto',
};

const lastName = {
  lastName: 'Silva',
};

const newPerson = Object.assign({},person,lastName);
newPerson.name = 'Gilberto';
console.log(newPerson);
console.log(person);

