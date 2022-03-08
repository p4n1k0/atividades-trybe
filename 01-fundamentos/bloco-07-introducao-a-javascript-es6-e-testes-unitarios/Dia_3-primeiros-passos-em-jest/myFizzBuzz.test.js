const { expect } = require('@jest/globals');
const myFizzBuzz = require('./myFizzBuzz.js');

describe('testa a função myFizzBuzz', () => {
    it('verifica, se de acordo com o parâmetro recebido, retorna o valor esperado', () => {
        expect(myFizzBuzz(15)).toBe('fizzbuzz');
        expect(myFizzBuzz(9)).toBe('fizz');
    }) 
})



