class CustomError extends Error {

    constructor(message, data = {}) {
        super(message);
        this._data = data;
    }

    get data() {
        return this._data;
    }

}
module.exports = CustomError;