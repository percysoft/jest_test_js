import {
  isNull,
  isFalse,
  isUndefined,
  isTrue
} 
from'../true'


describe('Probar resultados nulos', () => {
  test('null', () => {
    expect(isNull()).toBeNull();
  });
});

describe('Probar resultados verdaderos', () => {
  test('verdadero', () => {
    expect(isTrue()).toBeTruthy();
  });
});

describe('Probar resultados falsos', () => {
  test('falso', () => {
    expect(isFalse()).toBeFalsy();
  });
});

describe('Probar resultados undefined', () => {
  test('undefined', () => {
    expect(isUndefined()).toBeUndefined();
  });
});