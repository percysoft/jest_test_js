import { sumar, multiplicar, restar, dividir } from '../math';

describe('Calculos matematicos', () => {
  test('Prueba de sumas ', () => {
    expect(sumar(1,1)).toBe(2);
  })
  test('Prueba de multiplicar ', () => {
    expect(multiplicar(4,8)).toBe(32);
  })
});