const ship = (type, length) => {
    const object = {
        length,
        type,
        hit(number) {
            // hit
            if (!this.hits[number])
            this.hits[number] = true;
        },
        isSunk() {
            if (this.hits[0] === true && allEqual(this.hits)) {
                return true;
            } return false;
        }
    };

    const allEqual = arr => arr.every(val => val === arr[0]);

    function makeHitsArray(length) {
        const array = [];
        for (let i = 0; i < length; i++) {
            array.push(false);
        };
        return array;
    }

    object.hits = makeHitsArray(length);


    return object;
};

module.exports = ship;