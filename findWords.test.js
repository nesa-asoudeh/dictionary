const finder = require('./findWords')

test('First example from problem description', () => {
    expect(finder.findWords("ate", ["ate", "eat", "tea", "", "dog", "do", "god", "goo", "go", "good"])).toStrictEqual(["ate", "eat", "tea"]);
});

test('Input string with repeated characters', () => {
    expect(finder.findWords("oogd", ["ate", "eat", "tea", "", "dog", "do", "god", "goo", "go", "good"])).toStrictEqual(["dog", "do", "god", "goo", "go", "good"]);
});

test('Input string with single character', () => {
    expect(finder.findWords("o", ["ate", "eat", "tea", "", "dog", "do", "god", "goo", "go", "good"])).toStrictEqual([]);
});

test('Empty input string', () => {
    expect(finder.findWords("", ["ate", "eat", "tea", "", "dog", "do", "god", "goo", "go", "good"])).toStrictEqual([]);
});

test('No overlap between input string and dictionary', () => {
    expect(finder.findWords("Nessy", ["ate", "eat", "tea", "", "dog", "do", "god", "goo", "go", "good"])).toStrictEqual([]);
});