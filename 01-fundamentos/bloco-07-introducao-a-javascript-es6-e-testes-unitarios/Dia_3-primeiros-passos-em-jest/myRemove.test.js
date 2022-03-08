const myRemove = require('./myRemove.js');

describe('testa a função myRemove', () => {
    it('deve retornar um array removendo o item correto', () => {
        expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    })
})