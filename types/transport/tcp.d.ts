export = Transport;
declare function Transport(stream: any, options: any): void;
declare class Transport {
    constructor(stream: any, options: any);
    transactionId: number;
    unitId: any;
    protocol: any;
    callbacks: {};
    buffer: any;
    wrap(pdu: any, options: any, next: any): Buffer;
    close(next: any): void;
    closed: boolean;
    pending(): any;
    unwrap(data: any): false | {
        transactionId: any;
        protocol: any;
        length: any;
        unitId: any;
        pdu: any;
        stream: any;
    };
}
declare namespace Transport {
    function prepare(options: any): (stream: any) => Transport;
}
