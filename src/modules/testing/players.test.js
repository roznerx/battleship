import { player } from '../players';
import { gameBoard } from '../gameboard';
import { ship } from '../ships';

test('player is created successfully', () => {
    let jackAubrey = player('Rear Admiral Jack Aubrey', 'CPU');
    expect(jackAubrey.name).toMatch('Rear Admiral Jack Aubrey');
    expect(jackAubrey.type).toMatch('CPU');
    expect(jackAubrey.ships.carrier.name).toMatch('Carrier');
    expect(jackAubrey.ships.battleship.name).toMatch('Battleship');
    expect(jackAubrey.turn).toBeFalsy();
}); 

test('human attack', () => {
    let admiralZhao = player('Admiral Zhao', "human");
    expect(admiralZhao.attack("H1")).toBe("H1");
}); 

test('CPU attack', () => {
    let testBoard = gameBoard();
    let captainRamius = player('Captain Marko Alexandrovich Ramius', "CPU");
    expect(captainRamius.attack("H1")).not.toBe("H1");
    testBoard.coordinatesArr.forEach(c => {
        expect(captainRamius.attack(c)).not.toBe(c);
    });
});
