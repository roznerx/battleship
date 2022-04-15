let elementMaker = (type, id, className) => {
    let e = document.createElement(type);
    e.id = id;
    e.className = className;
    return e;
};

function renderBoard(boardToRender, eToAppend) {
    boardToRender.coordinatesArr.forEach(e => {
        let coordRender = elementMaker('div', e.name, 'board-coord');
        eToAppend.appendChild(coordRender);
    })
}

function renderFleetName (player, eToAppend) {
    Object.keys(player.ships).forEach(s => {
        let nameRender = elementMaker('h4', s.name /* REVISAR EL NOMBRE */, 'fleet-member');
        eToAppend.appendChild(nameRender);        
    });
}

function renderFleetHealth (player, eToAppend) {
    Object.keys(player.ships).forEach(s => {
        let healthRender = elementMaker('div', '', 'ship-health');
        eToAppend.appendChild(healthRender);        
    });
}

export { elementMaker, renderBoard, renderFleetName , renderFleetHealth };