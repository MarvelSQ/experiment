import { describe, expect, test } from 'vitest'

function add(a: number, b: number) {
  return a + b;
}

describe('base test', () => {
  test('add function', () => {
    expect(add(1, 2)).toEqual(3);
  })
})