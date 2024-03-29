const chai = require('chai');
const sinon = require('sinon');
const fs = require('fs');
const chaiHttp = require('chai-http');
const app = require('../../src/app');

const { expect } = chai;

chai.use(chaiHttp);

const mockFile = JSON.stringify({
    brands: [
        {
            id: 1,
            name: 'Lindt & Sprungli',
        },
        {
            id: 2,
            name: 'Ferrero',
        },
        {
            id: 3,
            name: 'Ghirardelli',
        },
    ],
    chocolates: [
        {
            id: 1,
            name: 'Mint Intense',
            brandId: 1,
        },
        {
            id: 2,
            name: 'White Coconut',
            brandId: 1,
        },
        {
            id: 3,
            name: 'Mon Chéri',
            brandId: 2,
        },
        {
            id: 4,
            name: 'Mounds',
            brandId: 3,
        },
    ] });

describe('Testando a API Cacao Trybe', () => {
    beforeEach(() => { sinon.stub(fs.promises, 'readFile').resolves(mockFile); });
    afterEach(() => { sinon.restore(); });
});

describe('Usando o método GET em /chocolates', () => {
    it('Retorna a lista completa de chocolates!', async () => {
        const output = [
            { id: 1, name: 'Mint Intense', brandId: 1 },
            { id: 2, name: 'White Coconut', brandId: 1 },
            { id: 3, name: 'Mon Chéri', brandId: 2 },
            { id: 4, name: 'Mounds', brandId: 3 },
        ];
        const response = await chai
            .request(app)
            .get('/chocolates');
        expect(response.status).to.be.equal(200);
        expect(response.body.chocolates).to.deep.equal(output);
    });
});

describe('Usando o método GET em /chocolates/brand/:brandId para buscar brandId 1', () => {
    it('Retorna os chocolates da marca Lindt & Sprungli', async () => {
        const response = await chai.request(app).get('/chocolates/brand/1');

        expect(response.status).to.be.equal(200);
        expect(response.body.chocolates).to.deep.equal([
            {
                id: 1,
                name: 'Mint Intense',
                brandId: 1,
            },
            {
                id: 2,
                name: 'White Coconut',
                brandId: 1,
            },
        ]);
    });
});

describe('Usando o método GET em /chocolates/total', () => {
      it('Retorna a quantidade total de chocolates', async () => {
        const response = await chai.request(app)
          .get('/chocolates/total');

        expect(response.status).to.be.equal(200);
        expect(response.body).to.deep.equal({ totalChocolates: 4 });
    });
  });