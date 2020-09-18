const imc = require('../src/imc');

test('imc of 85kg and 180cm to be ', () => {
    expect(imc.imc(85, 180, 'cm')).toBe(26.234567901234566);
});

test('imc of 85kg and 180 to be ', () => {
    expect(imc.imc(85, 180)).toBe(26.234567901234566);
});

test('imc of 85kg and 1.8m to be ', () => {
    expect(imc.imc(85, 1.8, 'm')).toBe(26.234567901234566);
});

test('imc < 16 to be Desnutricion 3er grado', () => {
    let msg = "Desnutrición 3er grado";
    let valImc = 15.999999999;
    expect(imc.description(valImc)).toBe(msg);
});

test('All imc < 16 to be Desnutricion 3er grado', () => {
    let msg = "Desnutrición 3er grado";
    let max = 16;
    let valImc = 0;

    while (valImc < max) {
        expect(imc.description(valImc)).toBe(msg);
        valImc += 0.5;
    }
});

test('All imc < 17 and imc >= 16 to be Desnutricion 2do grado', () => {
    let msg = "Desnutrición 2do grado";
    let max = 17;
    let valImc = 16;

    while (valImc < max) {
        expect(imc.description(valImc)).toBe(msg);
        valImc += 0.1;
    }
});