/* global test expect */

const { IWLorents } = require('../dist/shycalc-core')
const iw = new IWLorents()

test('Ideal weight male tall 1.8m to be 72.5', () => {
  expect(iw.calc({ gender: 'M', height: 1.8, unit: 'm' })).toBe(72.5)
})

test('Ideal weight male tall 180cm to be 72.5', () => {
  expect(iw.calc({ gender: 'M', height: 180, unit: 'cm' })).toBe(72.5)
})

test('Ideal weight female tall 1.6m to be 51.75', () => {
  expect(iw.calc({ gender: 'F', height: 1.6, unit: 'm' })).toBe(51.75)
})

test('Ideal weight female tall 160cm to be 51.75', () => {
  expect(iw.calc({ gender: 'F', height: 160, unit: 'cm' })).toBe(51.75)
})

test('Invalid gender should return error', () => {
  expect(() => iw.calc({ gender: 'X', height: 160, unit: 'cm' })).toThrow()
})

test('Ideal weigth implemtation has no description', () => {
  expect(iw.description()).toBe(undefined)
})
