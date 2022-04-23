/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setNewGame": () => (/* binding */ setNewGame)
/* harmony export */ });
/* harmony import */ var _ships__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _players__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _characters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);






function setNewGame() {

    //PLAYER MAKER
    let playerOne = (0,_players__WEBPACK_IMPORTED_MODULE_2__.player)('Admiral Nachito', 'human');
    let playerName = document.getElementById('player-name');
    playerName.innerHTML = playerOne.name;
    let playerBoard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_1__.gameBoard)();
    playerBoard.makeCoordinates();

    let carrierCoords = ['A1', 'A2', 'A3', 'A4', 'A5'];
    playerBoard.placeShip(playerOne.ships.carrier, carrierCoords);
    let battleshipCoords = ['C1', 'C2', 'C3', 'C4'];
    playerBoard.placeShip(playerOne.ships.battleship, battleshipCoords);
    let destroyerCoords = ['E1', 'E2', 'E3'];
    playerBoard.placeShip(playerOne.ships.destroyer, destroyerCoords);
    let submarineCoords = ['G1', 'G2', 'G3'];
    playerBoard.placeShip(playerOne.ships.submarine, submarineCoords);
    let patrolCoords = ['I1', 'I2'];
    playerBoard.placeShip(playerOne.ships.patrol, patrolCoords);

    let humanBoard = document.getElementById('human-gameboard');
    (0,_dom__WEBPACK_IMPORTED_MODULE_4__.renderBoard)(playerBoard, humanBoard);
    let fleetNames = document.getElementById('fleet-names');
    let fleetHealth = document.getElementById('fleet-health');
    (0,_dom__WEBPACK_IMPORTED_MODULE_4__.renderFleetName)(playerOne, fleetNames);
    (0,_dom__WEBPACK_IMPORTED_MODULE_4__.renderFleetHealth)(playerOne, fleetHealth);
    playerOne.turn = true;

    //CPU MAKER
    let cpu = (0,_players__WEBPACK_IMPORTED_MODULE_2__.player)((0,_characters__WEBPACK_IMPORTED_MODULE_3__.randomChar)(), 'CPU');
    let cpuName = document.getElementById('cpu-name');
    cpuName.innerHTML = cpu.name;
    let cpuBoard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_1__.gameBoard)();
    cpuBoard.makeCoordinates();

    let enemyCarrierCoords = ['A1', 'A2', 'A3', 'A4', 'A5'];
    cpuBoard.placeShip(cpu.ships.carrier, enemyCarrierCoords);
    let enemyBattleshipCoords = ['C1', 'C2', 'C3', 'C4'];
    cpuBoard.placeShip(cpu.ships.battleship, enemyBattleshipCoords);
    let enemyDestroyerCoords = ['E1', 'E2', 'E3'];
    cpuBoard.placeShip(cpu.ships.destroyer, enemyDestroyerCoords);
    let enemySubmarineCoords = ['G1', 'G2', 'G3'];
    cpuBoard.placeShip(cpu.ships.submarine, enemySubmarineCoords);
    let enemyPatrolCoords = ['I1', 'I2'];
    cpuBoard.placeShip(cpu.ships.patrol, enemyPatrolCoords);

    let enemyBoard = document.getElementById('cpu-gameboard');
    (0,_dom__WEBPACK_IMPORTED_MODULE_4__.renderBoard)(cpuBoard, enemyBoard);
    let enemyFleetNames = document.getElementById('enemy-fleet-names');
    let enemyFleetHealth = document.getElementById('enemy-fleet-health');
    (0,_dom__WEBPACK_IMPORTED_MODULE_4__.renderFleetName)(cpu, enemyFleetNames);
    (0,_dom__WEBPACK_IMPORTED_MODULE_4__.renderFleetHealth)(cpu, enemyFleetHealth);

    //TURNS
    playerOne.turn = false;
    cpu.turn = true;
    if (cpu.turn == true) {
        _dom__WEBPACK_IMPORTED_MODULE_4__.turnInfo.innerHTML = 'Enemy Turn!';
        let attackCoords = '';
        cpu.attack(attackCoords);
        playerBoard.receiveAttack(attackCoords);
        playerBoard.coordinatesArr.forEach(c => {
            if (c.name == attackCoords) {
                if (c.status == "occupied") {
                    squares[i].style.backgroundColor = 'red';
                } else if (c.status == "empty") {
                    squares[i].innerHTML = 'X';
                    squares[i].style.color = 'red';
                }
            };
        });
        cpu.turn = false;
        playerOne.turn = true;
    };
    /*
    playerOne.turn = true;
    cpu.turn = false;
    if (playerOne.turn == true) {
        turnInfo.innerHTML = 'Your Turn!';
        let attackCoords = '';
        let squares = enemyBoard.childNodes;
        for (let i = 0; i < squares.length; i++) {
            squares[i].addEventListener("click", () => {
                attackCoords = squares[i].id;
                cpuBoard.coordinatesArr.forEach(c => {
                    if (c.name == attackCoords) {
                        if (c.status == "occupied") {
                            squares[i].style.backgroundColor = 'red';
                        } else if (c.status == "empty") {
                            squares[i].innerHTML = 'X';
                            squares[i].style.color = 'red';
                        }
                    };
                });
                playerOne.attack(attackCoords);
                cpuBoard.receiveAttack(attackCoords);
                playerOne.turn = false;
                cpu.turn = true;
            });
        };
    } else if (cpu.turn == true) {
        turnInfo.innerHTML = 'Enemy Turn!';
        let attackCoords = '';
        cpu.attack(attackCoords);
        playerBoard.receiveAttack(attackCoords);
        playerBoard.coordinatesArr.forEach(c => {
            if (c.name == attackCoords) {
                if (c.status == "occupied") {
                    squares[i].style.backgroundColor = 'red';
                } else if (c.status == "empty") {
                    squares[i].innerHTML = 'X';
                    squares[i].style.color = 'red';
                }
            };
        });
        cpu.turn = false;
        playerOne.turn = true;
    }*/
}



/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ship": () => (/* binding */ ship)
/* harmony export */ });
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



/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gameBoard": () => (/* binding */ gameBoard)
/* harmony export */ });
/* harmony import */ var _ships__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


let gameBoard = () => { 
    return {
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
                                    ps.isSunk();
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
};



/***/ }),
/* 4 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "player": () => (/* binding */ player)
/* harmony export */ });
/* harmony import */ var _ships__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);



let player = (name, type) => {
    return {
        name: name,
        type: type,
        ships: {
            carrier: (0,_ships__WEBPACK_IMPORTED_MODULE_0__.ship)('Carrier', 5),
            battleship: (0,_ships__WEBPACK_IMPORTED_MODULE_0__.ship)('Battleship', 4),
            destroyer: (0,_ships__WEBPACK_IMPORTED_MODULE_0__.ship)('Destroyer', 3),
            submarine: (0,_ships__WEBPACK_IMPORTED_MODULE_0__.ship)('Submarine', 3),
            patrol: (0,_ships__WEBPACK_IMPORTED_MODULE_0__.ship)('Patrol', 2)
        },
        turn: false,
        attack(atkCoords) {
            if (this.type == 'human') {
                return atkCoords;
            } else if (this.type == 'CPU') {
                function makeCoord() {
                    let randomizer = (value) => value[Math.floor(Math.random() * value.length)];
                    let randomCoord = () => randomizer(_gameboard__WEBPACK_IMPORTED_MODULE_1__.gameBoard.columns) + randomizer(_gameboard__WEBPACK_IMPORTED_MODULE_1__.gameBoard.rows);
                    _gameboard__WEBPACK_IMPORTED_MODULE_1__.gameBoard.coordinatesArr.forEach(c => {
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



/***/ }),
/* 5 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "randomChar": () => (/* binding */ randomChar)
/* harmony export */ });
let characterArr = [
    'Rear Admiral Sir John Aubrey', 'Admiral Zhao of the Fire Nation', 'Captain Marko Alexandrovich Ramius', 'Fleet Admiral Gial Ackbar',
    'HH Admiral General Haffaz Aladeen', 'Admiral Viscount Horatio Hornblower', 'Fleet Admiral Honor Harrington', 'US Admiral Terrance Shane'
];

let randomChar = () => characterArr[Math.floor(Math.random() * characterArr.length)];



/***/ }),
/* 6 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "elementMaker": () => (/* binding */ elementMaker),
/* harmony export */   "renderBoard": () => (/* binding */ renderBoard),
/* harmony export */   "renderFleetHealth": () => (/* binding */ renderFleetHealth),
/* harmony export */   "renderFleetName": () => (/* binding */ renderFleetName),
/* harmony export */   "turnInfo": () => (/* binding */ turnInfo)
/* harmony export */ });
let elementMaker = (type, id, className, innerHTML) => {
    let e = document.createElement(type);
    e.id = id;
    e.className = className;
    e.innerHTML = innerHTML;
    return e;
};

function renderBoard(boardToRender, eToAppend) {
    boardToRender.coordinatesArr.forEach(e => {
        let coordRender = elementMaker('div', e.name, 'board-coord', '');
        eToAppend.appendChild(coordRender);
        if (e.status == 'occupied') {
            coordRender.style.backgroundColor = 'green';
        }
    })
}

function renderFleetName (player, eToAppend) {
    let playerFleet = Object.values(player.ships);
    playerFleet.forEach(s => {
        let nameRender = elementMaker('h4', `${s.name}-mini`, 'fleet-member', s.name);
        eToAppend.appendChild(nameRender);
    });
}

function renderFleetHealth (player, eToAppend) {
    let playerFleet = Object.values(player.ships);
    playerFleet.forEach(s => {
        let healthRender = elementMaker('div', `${s.name}-health`, 'ship-health', '');
        eToAppend.appendChild(healthRender);
        for (let i = 0; i <= s.size; i++) {
            let healthBarPart = elementMaker('div', `${s.name}-health-part`, 'ship-health-part', '');
            healthRender.appendChild(healthBarPart);
            healthRender.style.display = 'grid';
            healthRender.style.gridTemplateColumns = `repeat(${s.size}, 1fr)`;
            healthRender.style.gridTemplateRows = '1fr';
            healthBarPart.style.backgroundColor = 'green';
            healthBarPart.style.border = 'white';
        }
    });
}

let turnInfo = document.getElementById('turn-info');



/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);


(0,_modules_game__WEBPACK_IMPORTED_MODULE_0__.setNewGame)();
})();

/******/ })()
;