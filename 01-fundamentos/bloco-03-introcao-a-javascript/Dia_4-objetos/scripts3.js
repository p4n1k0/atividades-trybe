let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };

  for (const chave in car) {
      console.log(chave, car[chave]);
  }

  