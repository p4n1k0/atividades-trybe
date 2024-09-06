const { expect } = require('chai');

const calculaSituacao = require('../examples/calculaSituacao');

describe('Quando a média for menor que 7', () => {
  it('retorna "reprovação"', () => {
    const resposta = calculaSituacao(4);

    expect(resposta).to.be.equals('reprovação');
  });
});
