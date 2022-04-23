import { ship } from './ships';
import { gameBoard } from './gameboard';

let player = (name, type) => {
    return {
        name: name,
        type: type,
        ships: {
            carrier: ship('Carrier', 5),
            battleship: ship('Battleship', 4),
            destroyer: ship('Destroyer', 3),
            submarine: ship('Submarine', 3),
            patrol: ship('Patrol', 2)
        },
        turn: false,
        attack(atkCoords) {
            if (this.type == 'human') {
                return atkCoords;
            } else if (this.type == 'CPU') {
                function makeCoord() {
                    let randomizer = (value) => value[Math.floor(Math.random() * value.length)];
                    let randomCoord = () => randomizer(gameBoard.columns) + randomizer(gameBoard.rows);
                    gameBoard.coordinatesArr.forEach(c => {
                        if (c.name == randomCoord && c.damage == 1) {
                            makeCoord();
                        } else {
                            return atkCoords = randomCoord;
                        }
                    })
                };
            }
        },
    }
};

export { player };