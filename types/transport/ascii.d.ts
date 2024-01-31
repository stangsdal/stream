export = Transport;
declare function Transport(stream: any, options: any): void;
declare class Transport {
    constructor(stream: any, options: any);
    callback: any;
    callbackSlaveId: any;
    buffer: any;
    wrap(pdu: any, options: any, next: any): Buffer;
    unwrap(data: any): false | {
        slaveId: any;
        crc: any;
        expected_crc: any;
        pdu: any;
        stream: any;
    };
}
declare namespace Transport {
    function lrc(data: any): any;
    function prepare(options: any): (stream: any) => Transport;
}
