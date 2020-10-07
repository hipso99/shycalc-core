/* global test expect */

const IWRobinson = require('../dist/shycalc-core').IWRobinson
const iw = new IWRobinson()

test('Ideal weight male tall 1.8m to be 71.75', () => {
  expect(iw.calc({ gender: 'M', height: 1.8, unit: 'm' })).toBe(71.75236220472442)
})

test('Ideal weight male tall 180cm to be 71.75', () => {
  expect(iw.calc({ gender: 'M', height: 180, unit: 'cm' })).toBe(71.75236220472442)
})

test('Ideal weight female tall 1.6m to be 53.60', () => {
  expect(iw.calc({ gender: 'F', height: 1.6, unit: 'm' })).toBe(53.60700787401575)
})

test('Ideal weight female tall 160cm to be 53.60', () => {
  expect(iw.calc({ gender: 'F', height: 160, unit: 'cm' })).toBe(53.60700787401575)
})

test('Invalid gender should return error', () => {
  expect(() => iw.calc({ gender: 'X', height: 160, unit: 'cm' })).toThrow()
})

test('Ideal weigth implemtation has no description', () => {
  expect(iw.description()).toBe(undefined)
})
