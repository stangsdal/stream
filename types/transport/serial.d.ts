export = Transport;
declare function Transport(stream: any, options: any): void;
declare class Transport {
    constructor(stream: any, options: any);
    callback: any;
    callbackSlaveId: any;
    queued: any;
    lastData: number;
    maxDataInterval: any;
    slaveId: any;
    wrap(pdu: any, options: any, next: any): Buffer;
    unwrap(data: any): false | {
        slaveId: any;
        crc: any;
        expected_crc: number;
        pdu: any;
        stream: any;
    };
    clearSend(): void;
}
declare namespace Transport {
    function crc16(buffer: any): number;
    function prepare(options: any): (stream: any) => Transport;
}
