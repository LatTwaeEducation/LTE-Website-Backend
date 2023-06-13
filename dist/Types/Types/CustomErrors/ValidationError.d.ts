import { ErrorStatus } from '../../Services/Validator';
export declare class ValidationError extends Error {
    errorStatus: ErrorStatus | undefined;
    constructor(errorStatus: ErrorStatus | undefined, message: string | undefined);
}
export declare enum TokenType {
    AccessToken = 0,
    ManagementToken = 1
}
//# sourceMappingURL=ValidationError.d.ts.map