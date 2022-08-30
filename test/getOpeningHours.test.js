const { TestScheduler } = require('jest');
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
  })
});
