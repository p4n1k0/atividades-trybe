const fs = require('fs').promises;

async function replaceNelson() {
    const fileContent = await fs.readFile('./simpsonsFamily.json', 'utf-8');
    const simpsons = JSON.parse(fileContent);
  
    const simpsonsWithoutNelson = simpsons.filter((simpson) => simpson.id !== '8');
  
    const simpsonsWithMaggie = simpsonsWithoutNelson.concat([{ id: '15', name: 'Maggie Simpson' }]);
    console.log(simpsonsWithMaggie);
  
    return fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsWithMaggie));
  }

  async function main() {
    await replaceNelson(); 
  }

  main()