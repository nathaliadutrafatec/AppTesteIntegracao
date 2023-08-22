const contas = require('./contas');

test("Soma 2 + 5 esperado 7 como resultado", () => {
    expect(contas.soma(2,5)).toBe(7)
})

test("Subtrai 5 - 2 esperado 3 como resultado", () => {
    expect(contas.subtracao(5,2)).toBe(3)
})

test("Multiplica 2 * 5 esperado 10 como resultado", () => {
    expect(contas.multiplicacao(2,5)).toBe(10)
})

test("Divide 10 / 2 esperado 5 como resultado", () => {
    expect(contas.divisao(10,2)).toBe(5)
})