const ship = require('./ship');

const gameboard = () => {
    const boardObject = {
        board: [],
        shipYard: [],
        checkBoard() {
            return this.board.map((x) => x.map((y) => y));
        },
        placeShip(type, length, coordinates) {                    // needs to have logic that makes
            const newShip = ship(type, length);                   //   sure that ship can be placed
            coordinates.forEach((x, y) => {

                this.board[y][x].occupant = type;
            })
            this.shipYard.push(newShip);
        }
    };
    const boardResolution = 10;
    // initialize board values
    for (let i = 0; i < boardResolution; i++) {
        boardObject.board
        .push(new Array(boardResolution)
        .fill({'occupant': 'none', 'hit': false}));
    };


    return boardObject;
};

module.exports = gameboard;