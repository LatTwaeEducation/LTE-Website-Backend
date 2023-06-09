export class ValidationError extends Error {
    constructor(errorStatus, message) {
        super(message);
        this.errorStatus = errorStatus;
        this.name = 'ValidationError';
    }
}
export var TokenType;
(function (TokenType) {
    TokenType[TokenType["AccessToken"] = 0] = "AccessToken";
    TokenType[TokenType["ManagementToken"] = 1] = "ManagementToken";
})(TokenType || (TokenType = {}));
