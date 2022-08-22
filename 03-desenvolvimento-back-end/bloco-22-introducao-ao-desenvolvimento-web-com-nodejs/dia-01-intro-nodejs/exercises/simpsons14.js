const fs = require('fs').promises;

async function createSimpsonsFamily() {
  const fileContent = await fs
    .readFile('./simpsons.json', 'utf-8');

  const simpsons = JSON.parse(fileContent);
}
// ...