let ship = (name, size) => {
	return {
		name: name,
		size: size,
		dmgArr: [],
		location: [],
		hit(p) {
			this.dmgArr.push(p);
		},
		isSunk() {
			if (this.dmgArr.length == this.size) {
				return true;
			}
		}
	}
};

/*
let ships = [
    carrier = ship('Carrier', 5),
    battleship = ship('Battleship', 4),
    destroyer = ship('Destroyer', 3),
    submarine = ship('Submarine', 3),
    patrolBoat = ship('Patrol Boat', 2)
]

let playerShips = [...ships];
let cpuShips = [...ships];*/

export { ship };