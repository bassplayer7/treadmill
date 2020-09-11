const score = require('./score');

test('ensure javascript score is 24', () => {
    expect(score('javascript')).toBe(24)
})

test('ensure swiftotter score is 16', () => {
    expect(score('swiftotter')).toBe(16)
})

test('ensure pneumonoultramicroscopicsilicovolcanoconiosis score is 68', () => {
    expect(score('pneumonoultramicroscopicsilicovolcanoconiosis')).toBe(68)
})

test('ensure alphabet (abcdefghijklmnopqrstuvwxyz) score is 87', () => {
    expect(score('abcdefghijklmnopqrstuvwxyz')).toBe(87)
})

test('ensure test score is 4', () => {
    expect(score('test')).toBe(4)
})
