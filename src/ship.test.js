const ship = require('./ship');


test('returns proper length', () => {
    expect(ship(3).length).toBe(3);
})

test('returns an array for hits', () => {
    expect(ship(4)).toHaveProperty( 'hits', [ false, false, false, false ])
});

test('hit is functioning correctly', () => {
    const testShip = ship(5);
    expect(testShip).toHaveProperty( 'hits', [false, false, false, false, false]);
    testShip.hit(1);
    expect(testShip).toHaveProperty('hits', [false, true, false, false, false]); 
    testShip.hit(0);
    testShip.hit(2);
    testShip.hit(3);
    testShip.hit(4);
    expect(testShip).toHaveProperty('hits', [true, true, true, true, true])
})

// test('hit takes values outside of range', () => {
//     const testShip = ship(2);
//     testShip.hit(8);
//     expect(testShip).toHaveProperty('hits', [ false, false]);
// })

test('isSunk is functioning correctly', () => {
    const testShip = ship(3);
    expect(testShip.isSunk()).toBe(false);
    testShip.hit(0);
    testShip.hit(1);
    testShip.hit(2);
    expect(testShip.isSunk()).toBe(true);
})

