import { ship } from './ships';
import { gameBoard } from './gameboard';
import { player } from './players';
import { randomChar } from './characters';
import { elementMaker, renderBoard , renderFleetName , renderFleetHealth , turnInfo } from './dom';

function setNewGame() {

    //PLAYER MAKER
    let playerOne = player('Admiral Nachito', 'human');
    let playerName = document.getElementById('player-name');
    playerName.innerHTML = playerOne.name;
    let playerBoard = gameBoard();
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
    renderBoard(playerBoard, humanBoard);
    let fleetNames = document.getElementById('fleet-names');
    let fleetHealth = document.getElementById('fleet-health');
    renderFleetName(playerOne, fleetNames);
    renderFleetHealth(playerOne, fleetHealth);
    playerOne.turn = true;

    //CPU MAKER
    let cpu = player(randomChar(), 'CPU');
    let cpuName = document.getElementById('cpu-name');
    cpuName.innerHTML = cpu.name;
    let cpuBoard = gameBoard();
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
    renderBoard(cpuBoard, enemyBoard);
    let enemyFleetNames = document.getElementById('enemy-fleet-names');
    let enemyFleetHealth = document.getElementById('enemy-fleet-health');
    renderFleetName(cpu, enemyFleetNames);
    renderFleetHealth(cpu, enemyFleetHealth);

    //TURNS
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
    }
}

export { setNewGame };