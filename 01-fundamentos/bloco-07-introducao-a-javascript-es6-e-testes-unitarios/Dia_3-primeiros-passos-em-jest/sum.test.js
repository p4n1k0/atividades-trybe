const sum = require('./sum');

describe('testa a função sum', () => {
    it('deve retornar o resultado da soma', () => {
        expect(sum(4, 5)).toBe(9);        
    });    
})