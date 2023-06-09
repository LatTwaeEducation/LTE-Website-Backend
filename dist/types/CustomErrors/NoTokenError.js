import { TokenType } from './ValidationError';
export class NoTokenError extends Error {
    constructor(tokenType) {
        let message;
        switch (tokenType) {
            case TokenType.AccessToken:
                message = ['No Access Token Found.', 'Please save the Access Token as REACT_APP_CONTENTFUL_ACCESS_TOKEN'].join('\n');
                break;
            case TokenType.ManagementToken:
                message = [
                    'No Management Token Found.',
                    'Please save the Management Token as REACT_APP_CONTENTFUL_MANAGEMENT_TOKEN',
                ].join('\n');
                break;
            default:
                message = 'Unknown Error';
        }
        super(message);
    }
}
