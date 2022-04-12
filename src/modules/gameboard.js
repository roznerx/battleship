import { ship } from './ships';

let gameBoard = {
        columns: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'],
        rows: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
        coordinatesArr: [],
        makeCoordinates() {
            let c = this.columns.forEach(c => { 
                let r = this.rows.forEach(r => {
                    this.coordinatesArr.push(c + r);
                });
            });
        },
		placeShip(ship, coords) {
            coords.forEach(sc => {
                let thisShipCoords = [].push(sc);
            })
            //MAYBE CREATE ARRAYS FOR EMPTY COORDINATES AND OCCUPIED COORDINATES?
        },
}

export { gameBoard };