import { ship } from './ships';
import { gameBoard } from './gameboard';
import { player } from './players';
import { randomChar } from './characters';
import { elementMaker, renderBoard , renderFleetName , renderFleetHealth } from './dom';

function setNewGame() {

    //PLAYER MAKER
    let playerOne = player('Admiral Nachito', 'human');
    let playerName = document.getElementById('player-name');
    playerName.innerHTML = playerOne.name;
    let playerBoard = gameBoard();
    playerBoard.makeCoordinates();
    let humanBoard = document.getElementById('human-gameboard');
    renderBoard(playerBoard, humanBoard);
    let fleetNames = document.getElementById('fleet-names');
    let fleetHealth = document.getElementById('fleet-health');
    renderFleetName(playerOne, fleetNames);
    renderFleetHealth(playerOne, fleetHealth);

    //CPU MAKER
    let cpu = player(randomChar(), 'CPU');
    let cpuName = document.getElementById('cpu-name');
    cpuName.innerHTML = cpu.name;
    let cpuBoard = gameBoard();
    cpuBoard.makeCoordinates();
    let enemyBoard = document.getElementById('cpu-gameboard');
    renderBoard(cpuBoard, enemyBoard);
    let enemyFleetNames = document.getElementById('enemy-fleet-names');
    let enemyFleetHealth = document.getElementById('enemy-fleet-health');
    renderFleetName(cpu, enemyFleetNames);
    renderFleetHealth(cpu, enemyFleetHealth);
}

export { setNewGame };