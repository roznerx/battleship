import { ship } from './ships';

let gameBoard = {
    columns: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'],
    rows: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
    coordinatesArr: [],
    placedShips: [],
    sunkenShips: [],
    missedAttacks: [],
    makeCoordinates() {
        let c = this.columns.forEach(c => { 
            let r = this.rows.forEach(r => {
                this.coordinatesArr.push(
                    {
                        name: c + r,
                        status: 'empty',
                        damage: 0
                    }
                );
            });
        });
    },
    placeShip(ship, coords) {
        this.placedShips.push(ship);
        coords.forEach(sc => {
            ship.location.push(sc);
            this.coordinatesArr.forEach(c => {
                if (c.name == sc) {
                    c.status = 'occupied';
                }
            })
        });
    },
    receiveAttack(atkCoords) {
        this.coordinatesArr.forEach(c => {
            if (atkCoords == c.name) {
                c.damage = 1;
                if (c.status == 'empty') {
                    this.missedAttacks.push(c.name);
                } else if (c.status == 'occupied') {
                    this.placedShips.forEach(ps => {
                        ps.location.forEach(psc => {
                            if (psc == atkCoords) {
                                ps.hit(atkCoords);
                                if (ps.isSunk() == true) {
                                    this.sunkenShips.push(ps);
                                }
                            }
                        })
                    })
                }
            }
        })
    }    
}

export { gameBoard };