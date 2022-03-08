const {encode, decode} = require('./encodeDecode.js');

describe('Testa a função encode e decode', () => {
    it('a função encode é definida', () => {
        expect(encode).toBeDefined();
    });
    it('encode é uma função', () => {
        expect(typeof encode).toEqual('function');
    });
    
    it('a função decode é definida', () => {
        expect(decode).toBeDefined();
      });
      it('decode é uma função', () => {
        expect(typeof decode).toEqual('function');
      });
})