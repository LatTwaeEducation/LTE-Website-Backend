import { ErrorStatus } from '../../Services/Validator';

export class ValidationError extends Error {
  public errorStatus: ErrorStatus | undefined;

  constructor(errorStatus: ErrorStatus | undefined, message: string | undefined) {
    super(message);
    this.errorStatus = errorStatus;
    this.name = 'ValidationError';
  }
}

export enum TokenType {
  AccessToken,
  ManagementToken,
}
