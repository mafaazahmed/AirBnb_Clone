class ExpressError extends Error {
    constructor(statusCode, message){
        super();
        statusCode = this.statusCode;
        message = this.message;
    }
}

module.exports = ExpressError;