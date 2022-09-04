// const { TestScheduler } = require('jest');
const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  test('Testa se não houver argumentos retorna o objeto', () => {
    const obj = {
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    };
    expect(getOpeningHours()).toEqual(obj);
  });
  test('Testa se passando os argumentos Monday e 09:00-AM retorna a string esperada', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toMatch(/The zoo is closed/);
  });
  test('Testa se passando os argumentos Tuesday e 09:00-AM retorna a string esperada', () => {
    expect(getOpeningHours('Tuesday', '09:00-AM')).toMatch(/The zoo is open/);
  });
  test('Testa se passando os argumentos Wednesday e 09:00-PM retorna a string esperada', () => {
    expect(getOpeningHours('Wednesday', '09:00-PM')).toMatch(/The zoo is closed/);
  });
  test('Testa se os argumentos Thu e 09:00-AM deve lançar uma mensagem de exceção', () => {
    expect(() => getOpeningHours('Thu', '09:00-AM')).toThrow('The day must be valid. Example: Monday');
  });
  test('Testa se os argumentos Friday e 09:00-ZM lança uma mensagem de exceção', () => {
    expect(() => getOpeningHours('Friday', '09:00-ZM')).toThrow('The abbreviation must be \'AM\' or \'PM\'');
  });
  test('Testa se os argumentos Saturday e C9:00-AM lança uma mensagem de exceção', () => {
    expect(() => getOpeningHours('Saturday', 'C9:00-AM')).toThrow('The hour should represent a number');
  });
  test('Testa se os argumentos Sunday e 09:c0-AM lança uma mensagem de exceção', () => {
    expect(() => getOpeningHours('Sunday', '09:c0-AM')).toThrow('The minutes should represent a number');
  });
  test('Testa se os argumentos Monday e 13:00-AM lança uma mensagem de exceção', () => {
    expect(() => getOpeningHours('Monday', '13:00-AM')).toThrow('The hour must be between 0 and 12');
  });
  test('Testa se os argumentos Tuesday e 09:60-AM lança uma mensagem de exceção', () => {
    expect(() => getOpeningHours('Tuesday', '09:60-AM')).toThrow('The minutes must be between 0 and 59');
  });
});
