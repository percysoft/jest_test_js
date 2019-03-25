
describe('Comprobar cadenas de texto', () => {

  const text = 'es un bonito texto';

  test('Debe contener el siguiente texto', () => {
    expect(text).toMatch(/bonito/);
  });

  test('no contiene el  siguiente texto', () => {
    expect(text).not.toMatch(/ess/);
  });
  
  test('Comprobar el tamaño del texto', () => {
    expect(text).toHaveLength(18);
  });


});