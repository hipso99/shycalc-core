const IWEmpiric1 = require('../dist/shycalc-core').IWEmpiric1;
const iwe1 = new IWEmpiric1();

test('Ideal weight male tall 1.8m to be 74.52', () => {
    expect(iwe1.calc({gender: 'M', height:1.8, unit:'m'})).toBe(74.52000000000001); 
});

test('Ideal weight male tall 180cm to be 74.52', () => {
    expect(iwe1.calc({gender: 'M', height:180, unit:'cm'})).toBe(74.52000000000001);
});

test('Ideal weight female tall 1.6m to be 55.04', () => {
    expect(iwe1.calc({gender: 'F', height:1.6, unit:'m'})).toBe(55.04000000000001); 
});

test('Ideal weight male tall 160cm to be 55.04', () => {
    expect(iwe1.calc({gender: 'F', height:160, unit:'cm'})).toBe(55.04000000000001);
});

test('Ideal weigth implemtation has no description', () => {
    expect(iwe1.description()).toBe(undefined);
});