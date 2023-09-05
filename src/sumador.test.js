import {validarcampo,validarlongitud} from "./sumador.js";

describe("VALIDAR CAMPO", () => {
  it("El post deberia tener un titulo", () => {
    const dato="titulo de post"
    expect(validarcampo(dato)).toEqual(true);
  });

  it("El post deberia tener un titulo lleno no vacio", () => {
    const dato=""
    expect(validarcampo(dato)).toEqual(false);
  });

  it("Titulo deberia ser maximo de 50 caracteres", () => {
    const dato="holiiiiiiiiiiiiiiiiiiiiii"
    expect(validarlongitud(dato)).toEqual(true);
  });
});
