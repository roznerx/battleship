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

export { ship };