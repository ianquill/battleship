const ship = require('./ship');


test('returns proper length', () => {
    expect(ship(3).length).toBe(3);
})

test('returns an array for hits', () => {
    expect(ship(4)).toHaveProperty( 'hits', [ false, false, false, false ])
});

test('hit is functioning', () => {
    expect(ship(5)).toHaveProperty( 'hits', [false, false, false, false, false]);
    expect(ship(5).hit(1)).toHaveProperty('hits', [false, true, false, false, false]); 
})