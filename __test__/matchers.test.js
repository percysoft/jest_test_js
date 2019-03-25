describe('Comparadores comunes', () => {
  const user = {
    name: "oscar",
    lastname: "barajas"
  }
  const user2 = {
    name: "oscar",
    lastname: "barajas"
  }
  const user3 = {
    name: "oscarsss",
    lastname: "barajasss"
  }
  test('igualdad de elementos' , () => {
    expect(user).toEqual(user2);
  })

  test('NO SON IGUALES de elementos' , () => {
    expect(user).not.toEqual(user3);
  })
});