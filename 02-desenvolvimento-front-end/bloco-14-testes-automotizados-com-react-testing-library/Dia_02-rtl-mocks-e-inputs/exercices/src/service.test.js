const service = require('./service');

describe('testando implementações', () => {
    test("testando se a função foi chamada, qual seu retorno, quantas vezes foi chamada e com quais parâmetros", () => {
        service.randomNumber = jest.fn().mockImplementationOnce((a, b, c) => a * b * c);
        
        expect(service.randomNumber(2, 3, 4)).toBe(24);
        expect(service.randomNumber).toHaveBeenCalled();
        expect(service.randomNumber).toHaveBeenCalledTimes(1);
        expect(service.randomNumber).toHaveBeenCalledWith(2, 3, 4);
    });
    
    test('mockando função que recebe um parâmetro e retorna seu dobro', () => {
        service.randomNumber.mockReset();
        expect(service.randomNumber).toHaveBeenCalledTimes(0);

        service.randomNumber.mockImplementation(a => a * 2);

        expect(service.randomNumber(5)).toBe(10);
        expect(service.randomNumber).toHaveBeenCalledTimes(1);
        expect(service.randomNumber).toHaveBeenCalledWith(5);
    });
    
    test('mockando função para receber um parâmetro e retornar em caixa baixa', () => {
        const mockFirstFunction = jest.spyOn(service, 'firstFunction'). mockImplementation(a => a.toLowerCase());

        expect(mockFirstFunction('UPPERCASE')).toBe('uppercase');
        expect(service.firstFunction).toHaveBeenCalledTimes(1);
        expect(service.firstFunction).toHaveBeenCalledWith('UPPERCASE');        
    });

    test('mockando função que recebe um parâmetro e retorna a última letra', () => {
        const mockSecondFunction = jest.spyOn(service, 'secondFunction'). mockImplementation(a => a.charAt(a.length - 1));

        expect(mockSecondFunction('letter')).toBe('r');
        expect(service.secondFunction).toHaveBeenCalledTimes(1);
        expect(service.secondFunction).toHaveBeenCalledWith('letter');
    });

    test('mockando função que recebe 3 parâmetros e os concatena', () => {
        const mockThirdFunction = jest.spyOn(service, 'thirdFunction').mockImplementation((a, b, c) => a.concat(b, c));

        expect(mockThirdFunction('tr', 'y', 'be')).toBe('trybe');
        expect(service.thirdFunction).toHaveBeenCalledTimes(1);
        expect(service.thirdFunction).toHaveBeenCalledWith('tr', 'y', 'be');
    });
});

describe('testando a requisição', () => {
    service.fetchDog = jest.fn();
    afterEach(service.fetchDog.mockReset);

    test('testando requisição caso a promisse resolva', async () => {
        service.fetchDog.mockResolvedValue('request sucess');
        service.fetchDog();

        expect(service.fetchDog).toHaveBeenCalled();
        expect(service.fetchDog).toHaveBeenCalledTimes(1);
        await expect(service.fetchDog()).resolves.toBe('request sucess');
        expect(service.fetchDog).toHaveBeenCalledTimes(2);
    });

    test('testando requisição caso a promisse seja rejeitada', async () => {
        service.fetchDog.mockRejectedValue('request failed');

        expect(service.fetchDog).toHaveBeenCalledTimes(0);
        await expect(service.fetchDog()).rejects.toMatch('request failed');
        expect(service.fetchDog).toHaveBeenCalledTimes(1);
    });
});
