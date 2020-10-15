/* global test expect */

const IWMetlife = require('../dist/shycalc-core').IWMLIC
const iw = new IWMetlife()

test('Ideal weight for a tall 1.8m to be 72.5', () => {
  expect(iw.calc({ height: 1.8, unit: 'm' })).toBe(72.5)
})

test('Ideal weight for a tall 180cm to be 72.5', () => {
  expect(iw.calc({ height: 180, unit: 'cm' })).toBe(72.5)
})

test('Ideal weigth implemtation has no description', () => {
  expect(iw.description()).toBe(undefined)
})
