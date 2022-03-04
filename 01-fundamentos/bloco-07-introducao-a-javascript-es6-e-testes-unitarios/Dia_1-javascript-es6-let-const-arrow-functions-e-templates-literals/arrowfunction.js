const testingScope = escopo => {
    if (escopo === false) {
      let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
      ifScope = `${ifScope} + 'ótimo, fui utilizada no escopo !'`;
      console.log(ifScope);
    } else {
      const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
      console.log(elseScope);
    }    
  }

  testingScope(false);


  
  const oddsAndEvens = [13, 3, 4, 10, 7, 2];

  // Seu código aqui.
  
  console.log(`Os números ${oddsAndEvens.sort((a, b) => a - b)} se encontram ordenados de forma crescente !`);