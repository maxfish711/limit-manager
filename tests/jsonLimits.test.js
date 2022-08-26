const fs = require('fs');
const filePath = 'data/limits.json';

test('File should exist', async () => {
    expect(fs.existsSync(filePath)).toBe(true);
});

test('File should be JSON', async () => {
    const data = JSON.parse(fs.readFileSync(filePath));
    expect(data).toEqual(expect.anything()); // non null or undefined
});

test('File should have required attributes', async () => {
    const data = JSON.parse(fs.readFileSync(filePath));
    expect(data.result[0]).toHaveProperty('name',expect.any(String));
    expect(data.result[0]).toHaveProperty('max',expect.any(Number));
    expect(data.result[0]).toHaveProperty('remaining',expect.any(Number));
});