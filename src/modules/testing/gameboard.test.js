import { gameBoard } from '../gameboard';
import { ship } from '../ships';

test('coordinates are created', () => {
    gameBoard.makeCoordinates();
    expect(gameBoard.coordinatesArr[0]).toMatchObject(
        {"name": "A1", "status": "empty", "damage": 0}
        //This is fine, OK? No way I'm testing a huge object full of arrays!
    );
});

test('ship is placed in the gameboard', () => {
    gameBoard.makeCoordinates();
    let carrier = ship('Carrier', 5);
    let coords = ["A1","A2","A3","A4","A5"]
    gameBoard.placeShip(carrier, coords)
    expect(carrier.location).toEqual(expect.arrayContaining(
        ["A1","A2","A3","A4","A5"]
    ));
    expect(gameBoard.coordinatesArr[0]).toMatchObject(
        {"name": "A1", "status": "occupied", "damage": 0}
    );
});

test('hit misses', () => {
    gameBoard.makeCoordinates();
    let carrier = ship('Carrier', 5);
    let coords = ["A1","A2","A3","A4","A5"]
    gameBoard.placeShip(carrier, coords)
    let attack = ["A6"];
    gameBoard.receiveAttack(attack);
    expect(gameBoard.missedAttacks).toEqual(expect.arrayContaining(
        ["A6"]
    ));
});

test('hit... Well, hits!', () => {
    gameBoard.makeCoordinates();
    let carrier = ship('Carrier', 5);
    let coords = ["A1","A2","A3","A4","A5"]
    gameBoard.placeShip(carrier, coords)
    let attack1 = "A4";
    gameBoard.receiveAttack(attack1);
    let attack2 = "A3";
    gameBoard.receiveAttack(attack2);
    expect(carrier.dmgArr).toEqual(expect.arrayContaining(
        ["A4", "A3"]
    ));
    expect(carrier.isSunk()).toBeFalsy();
});

test('sunken ships', () => {
    gameBoard.makeCoordinates();
    let carrier = ship('Carrier', 5);
    let coords = ["A1","A2","A3","A4","A5"]
    gameBoard.placeShip(carrier, coords)
    //let attack = ["A1","A2","A3","A4","A5"];
    let attack1 = "A1";
    let attack2 = "A2";
    let attack3 = "A3";
    let attack4 = "A4";
    let attack5 = "A5";
    //Attack containing five coordinates due to testing purposes
    //Should be limited to one coordinate per attack during the game
    //gameBoard.receiveAttack(attack);
    gameBoard.receiveAttack(attack1);
    gameBoard.receiveAttack(attack2);
    gameBoard.receiveAttack(attack3);
    gameBoard.receiveAttack(attack4);
    gameBoard.receiveAttack(attack5);
    /*expect(gameBoard.sunkenShips).toEqual(expect.arrayContaining(
        [carrier]
    ));*/
    expect(carrier.isSunk()).toBeTruthy();
});