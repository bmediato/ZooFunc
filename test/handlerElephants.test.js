const { TestScheduler } = require('jest');
const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  test('Testa se o argumento count retorna o número 4', () => {
    expect(handlerElephants('count')).toBe(4);
  })
  test('Testa se o argumento averageAge retorna um número próximo a 10.5', () => {
    expect(handlerElephants('averageAge')).toBe(10.5);
  })
  test('Testa se o argumento names retorna um array de nomes que possui o nome Jefferson', () => {
    expect(handlerElephants('names')).toContain('Jefferson');
  })
});
