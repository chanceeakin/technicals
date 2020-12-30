import {arrayToObject} from '../objectToArray'

const testCase = {
  fullName: 'Alexander Hamilton',
  age: '200',
  gender: 'male',
  hometown: 'NYC'
}

const result = [
  ['fullName', 'Alexander Hamilton'],
  ['age', '200'],
  ['gender', 'male'],
  ['hometown', 'NYC']
]

const valResult = [
  'Alexander Hamilton',
  '200',
  'male',
  'NYC'
]

// describe('object to array', () => {
//   it('converts an object to array', () => {
//     expect(objectToArray(testCase)).toEqual(expect.arrayContaining(result))
//   })
// }) 

describe('array to object', () => {
  it('converts an array to object', () => {
    expect(arrayToObject(result)).toEqual(expect.objectContaining(testCase))
  })
}) 