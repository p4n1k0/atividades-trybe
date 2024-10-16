const fs = require('fs').promises;
const { join } = require('path');

const readCacaoTrybeFile = async () => {
  const path = '/files/cacauTrybeFile.json';
  try {
    const contentFile = await fs.readFile(join(__dirname, path), 'utf-8');
    return JSON.parse(contentFile);
  } catch (error) {
    return null;
  }
};

const getAllChocolates = async () => {
  const cacauTrybe = await readCacaoTrybeFile();
  return cacauTrybe.chocolates;
};

const getChocolateById = async (id) => {
  const cacauTrybe = await readCacaoTrybeFile();

  return cacauTrybe.chocolates
    .find((chocolate) => chocolate.id === id);
};

const getChocolateByBrand = async (brandId) => {
  const cacauTrybe = await readCacaoTrybeFile();

  return cacauTrybe.chocolates.filter((chocolate) => chocolate.brandId === brandId);
};

const findChocolateByName = async (query) => {
  const cacauTrybe = await readCacaoTrybeFile();
  return cacauTrybe.chocolates
    .filter((chocolate) => chocolate.name.toLowerCase().includes(query.toLowerCase()));
};

module.exports = {
  getAllChocolates,
  getChocolateById,
  getChocolateByBrand,
  findChocolateByName,
};
