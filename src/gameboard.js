const ship = require('./ship');

const gameboard = () => {
    const boardObject = {
        board: [],
        shipYard: [],
        checkBoard() {
            return this.board.map((x) => x.map((y) => y));
        },
        placeShip(length, coordinates) {
            const newShip = ship(length);
            this.shipYard.push(newShip);
            coordinates.forEach((x, y) => {
                this.board[y][x].occupant = /* ship name? */ 0;
            })
        }
    };
    const boardResolution = 10;
    // initialize board values
    for (let i = 0; i < boardResolution; i++) {
        boardObject.board.push(new Array(boardResolution).fill({'occupant': 'none', 'hit': false}));
    };


    return boardObject;
};

module.exports = gameboard;