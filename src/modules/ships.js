let ship = function createShip(name, length) {
	return {
		name: name,
		length: length,
		dmgArr: [],
		hit(p) {
			this.dmgArr.push(p);
		},
		isSunk() {
			if (this.dmgArr.length == length) {
				return true;
			}
		}
	}
};

/*
let ships = [
    carrier = createShip('Carrier', 5),
    battleship = createShip('Battleship', 4),
    destroyer = createShip('Destroyer', 3),
    submarine = createShip('Submarine', 3),
    patrolBoat = createShip('Patrol Boat', 2)
]

let playerShips = [...ships];
let cpuShips = [...ships];*/

export { ship };