export = Parser;
declare class Parser {
    static init(): Promise<void>;
    constructor(socket: any);
    _socket: any;
    _state: number;
    _data: any;
    _sizePacketSoFar: number;
    _messageTag: number;
    _messageSize: number;
    _handshakeComplete: boolean;
    _isWaitingForData: boolean;
    _onData(buffer: any): void;
    destroy(): void;
    _emitError(error: any): void;
    _waitForData(): void;
    _onGotVersion(): void;
    _onGotMessageTag(): void;
    _onGotMessageSize(): void;
    _onGotMessageBytes(): void;
    _getNextMessage(): void;
    _buildProtobufFromTag(tag: any): any;
}
