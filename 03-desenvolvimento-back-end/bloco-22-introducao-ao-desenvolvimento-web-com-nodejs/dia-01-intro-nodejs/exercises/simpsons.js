const fs = require('fs').promises;

async function readAll() {
    const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
    const simpsons = JSON.parse(fileContent);
  }  

  async function main() {
    await readAll();
  }
  
  main();