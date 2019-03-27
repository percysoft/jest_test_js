import { callbackHell } from '../callbacks';

describe('Probando un callback', () => {

  test('callback' , done => {
    function otherCallback(data) {
      expect(data).toBe('Hola javascript')
      done()
    }
    callbackHell(otherCallback);
  });
});