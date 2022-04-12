import { ship } from '../ships';

test('ship is created successfully', () => {
    expect(ship('Carrier', 5).name).toMatch('Carrier');
    expect(ship('Carrier', 5).size).toBe(5);
    expect(ship('Carrier', 5).dmgArr).toEqual(expect.arrayContaining([]));
});

let carrier = ship('Carrier', 5);
let littleShip = ship('littleShip', 1);
carrier.hit('A1');
carrier.hit('A3');
littleShip.hit('A2');

test('hit stores hits in dmgArr', () => {
    expect(carrier.dmgArr).toEqual(expect.arrayContaining(['A1', 'A3']));
    expect(littleShip.dmgArr).toEqual(expect.arrayContaining(['A2']));
});

test('ship is sunk', () => {
    expect(littleShip.isSunk()).toBeTruthy();
    expect(carrier.isSunk()).toBeFalsy();
});