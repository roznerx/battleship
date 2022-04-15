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
        for (let i = 0; i < s.size; i++) {
            let healthBarPart = elementMaker('div', `${s.name}-health-part`, 'ship-health-part', '');
        }
    });
}

/*
healthBarPart.style.display = 'grid';
healthBarPart.syle.gridTemplateColumns = `repeat(${s.size}, 1fr)`;
healthBarPart.style.gridTemplateRows = '1fr';
healthRender.appendChild(healthBarPart);*/

export { elementMaker, renderBoard, renderFleetName , renderFleetHealth };