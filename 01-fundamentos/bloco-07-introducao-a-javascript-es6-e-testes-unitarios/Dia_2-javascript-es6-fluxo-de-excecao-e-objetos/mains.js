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


const student = {
    Html: 'Muito Bom',
    Css: 'Bom',
    JavaScript: 'Ótimo',
    SoftSkill: 'Ótimo',
  };
  
  const listSkillsValuesWithFor = (student) => {
    const skills = [];
    for(skill in student) {
      skills.push(student[skill]);
    }
  
    return skills;
  };
  
  const listSkillsValuesWithValues = (student) => Object.values(student);
  
  // Sem Object.values
  console.log(listSkillsValuesWithFor(student));
  
  // Com Object.values
  console.log(listSkillsValuesWithValues(student));
