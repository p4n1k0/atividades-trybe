const fs = require('fs').promises;

async function addNelsonToFamily() {
  const fileContent = await fs
    .readFile('./simpsonsFamily.json', 'utf-8');
  
  const simpsonsFamily = JSON.parse(fileContent);
}