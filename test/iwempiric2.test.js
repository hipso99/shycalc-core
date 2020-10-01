const IWEmpiric2 = require('../dist/shycalc-core').IWEmpiric2;
const iwe = new IWEmpiric2();

test('Ideal weight male tall 1.8m to be 70', () => {
    expect(iwe.calc({gender: 'M', height:1.8, unit:'m'})).toBe(70); 
});

test('Ideal weight male tall 180cm to be 70', () => {
    expect(iwe.calc({gender: 'M', height:180, unit:'cm'})).toBe(70);
});

test('Ideal weight female tall 1.6m to be 55', () => {
    expect(iwe.calc({gender: 'F', height:1.6, unit:'m'})).toBe(55); 
});

test('Ideal weight male tall 160cm to be 55', () => {
    expect(iwe.calc({gender: 'F', height:160, unit:'cm'})).toBe(55);
});


test('Invalid gender should return error', () => {
    expect(() => iwe.calc({gender: 'X', height:160, unit:'cm'})).toThrow();
});
test('Ideal weigth implemtation has no description', () => {
    expect(iwe.description()).toBe(undefined);
});

