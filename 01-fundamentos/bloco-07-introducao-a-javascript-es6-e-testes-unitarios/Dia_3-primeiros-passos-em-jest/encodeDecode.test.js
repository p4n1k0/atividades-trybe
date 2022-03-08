const {encode, decode} = require('./encodeDecode.js');

describe('Testa a função encode e decode', () => {
    it('a função encode é definida', () => {
        expect(encode).toBeDefined();
    });
    it('encode é uma função', () => {
        expect(typeof encode).toEqual('function');
    });
    it('converte apenas a vogal "a" no número 1', () => {
      expect(encode('ana')).toEqual('1n1');
    });
    it('converte apenas a vogal "e" no número 2', () => {
      expect(encode('ele')).toEqual('2l2');
    });
    it('converte apenas a vogal "i" no número 3', () => {
      expect(encode('filipi')).toEqual('f3l3p3');
    });
    it('converte apenas a vogal "o" no número 4', () => {
      expect(encode('ovo')).toEqual('4v4');
    });
    it('converte apenas a vogal "u" no número 5', () => {
      expect(encode('urubu')).toEqual('5r5b5');
    });
    
    it('a função decode é definida', () => {
        expect(decode).toBeDefined();
      });
      it('decode é uma função', () => {
        expect(typeof decode).toEqual('function');
      });
})