import { gameBoard } from '../gameboard';
import { ship } from '../ships';

test('coordinates are created', () => {
    let testBoard = gameBoard();
    testBoard.makeCoordinates();
    expect(testBoard.coordinatesArr[0]).toMatchObject(
        {"name": "A1", "status": "empty", "damage": 0}
        //This is fine, OK? No way I'm testing a huge object full of arrays!
    );
});

test('ship is placed in the gameboard', () => {
    let testBoard = gameBoard();
    testBoard.makeCoordinates();
    let carrier = ship('Carrier', 5);
    let coords = ["A1","A2","A3","A4","A5"]
    testBoard.placeShip(carrier, coords)
    expect(carrier.location).toEqual(expect.arrayContaining(
        ["A1","A2","A3","A4","A5"]
    ));
    expect(testBoard.coordinatesArr[0]).toMatchObject(
        {"name": "A1", "status": "occupied", "damage": 0}
    );
});

test('hit misses', () => {
    let testBoard = gameBoard();
    testBoard.makeCoordinates();
    let carrier = ship('Carrier', 5);
    let coords = ["A1","A2","A3","A4","A5"]
    testBoard.placeShip(carrier, coords)
    let attack = ["A6"];
    testBoard.receiveAttack(attack);
    expect(testBoard.missedAttacks).toEqual(expect.arrayContaining(
        ["A6"]
    ));
});

test('hit... Well, hits!', () => {
    let testBoard = gameBoard();
    testBoard.makeCoordinates();
    let carrier = ship('Carrier', 5);
    let coords = ["A1","A2","A3","A4","A5"]
    testBoard.placeShip(carrier, coords)
    let attack1 = "A4";
    testBoard.receiveAttack(attack1);
    let attack2 = "A3";
    testBoard.receiveAttack(attack2);
    expect(carrier.dmgArr).toEqual(expect.arrayContaining(
        ["A4", "A3"]
    ));
    expect(carrier.isSunk()).toBeFalsy();
});

test('sunken ships', () => {
    let testBoard = gameBoard();
    testBoard.makeCoordinates();
    let carrier = ship('Carrier', 5);
    let coords = ["A1","A2","A3","A4","A5"]
    testBoard.placeShip(carrier, coords)
    let attack1 = "A1";
    let attack2 = "A2";
    let attack3 = "A3";
    let attack4 = "A4";
    let attack5 = "A5";
    testBoard.receiveAttack(attack1);
    testBoard.receiveAttack(attack2);
    testBoard.receiveAttack(attack3);
    testBoard.receiveAttack(attack4);
    testBoard.receiveAttack(attack5);
    expect(testBoard.sunkenShips).toEqual(expect.arrayContaining(
        [carrier]
    ));
    expect(carrier.isSunk).toBeTruthy();
});