import { ship } from './ships';
import { gameBoard } from './gameboard';
import { player } from './players';
import { randomChar } from './characters';
import { elementMaker, renderBoard , renderFleetName , renderFleetHealth } from './dom';

function setNewGame() {


    let playerOne = player('Admiral Nachito', 'human');
    let playerName = document.getElementById('player-name');
    playerName.innerHTML = playerOne.name;

    let cpu = player(randomChar(), 'CPU');

    let playerBoard = gameBoard();
    playerBoard.makeCoordinates();
    let cpuBoard = gameBoard();
    cpuBoard.makeCoordinates();

    let humanBoard = document.getElementById('human-gameboard');
    renderBoard(playerBoard, humanBoard);

    let fleetNames = document.getElementById('fleet-names');
    let fleetHealth = document.getElementById('fleet-health');

    renderFleetName(playerOne, fleetNames);
    renderFleetHealth(playerOne, fleetHealth);



}

export { setNewGame };