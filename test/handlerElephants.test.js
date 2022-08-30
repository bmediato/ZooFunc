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
  test('Testa se o argumento location retorna a string NW', () => {
    expect(handlerElephants('location')).toMatch(/NW/);
  })
  test('Testa se o argumento popularity retorna um número igual ou maior a 5', () => {
    expect(handlerElephants('popularity')).toBeGreaterThanOrEqual(5);
  })
  test('Testa se o argumento availability retorna um array de dias da semana que não contém Monday', () => {
    expect(handlerElephants('availability')).not.toContain('Monday');
  })
  test('Testa se não passar nenhum parametro a função retorna undefined', () => {
    expect(handlerElephants()).toBeUndefined();
  })
});
