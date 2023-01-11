testData = {};

testData.add = [
    { a: 1, b: 2, expected: 3 },
    { a: -1, b: -8, expected: -9 },
    { a: 12435262, b: -33469443, expected: -21034181 }
];


testData.multiply = [
    { a: 2, b: 2, c: -1, expected: -6 },
    { a: 1, b: 2, c: 3, expected: 6 },
    { a: 0.5, b: 2, c: 3, expected: 3 }
];

testData.add1 = testData.add;

testData.sortOnLength = [
    { a: "a", b: "bb", c: "ccc", expected: ["a", "bb", "ccc"] },
    { a: "Jeg er streng", b: "Jeg er ikke et tal", c: "Jeg Yoda", expected: [ "Jeg Yoda", "Jeg er streng", "Jeg er ikke et tal"] },
    { a: "", b:"i", c:"ii", expected: ["", "i", "ii"] }
];