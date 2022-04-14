export = Client;
declare class Client {
    static init(): Promise<void>;
    constructor(credentials: any, persistentIds: any);
    _credentials: any;
    _persistentIds: any;
    _retryCount: number;
    _onSocketConnect(): void;
    _onSocketClose(): void;
    _onSocketError(error: any): void;
    _onMessage({ tag, object }: {
        tag: any;
        object: any;
    }): void;
    _onParserError(error: any): void;
    connect(): Promise<void>;
    _parser: Parser;
    destroy(): void;
    _checkIn(): Promise<any>;
    _connect(): void;
    _socket: any;
    _destroy(): void;
    _loginBuffer(): any;
    _retry(): void;
    _retryTimeout: number;
    _onDataMessage(object: any): void;
}
import Parser = require("./parser");
