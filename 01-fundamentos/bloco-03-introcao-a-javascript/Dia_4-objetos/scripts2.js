let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge',
  };

  for (const chave in names) {
      console.log("Olá " + (chave, names[chave]));
  }