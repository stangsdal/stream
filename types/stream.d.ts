export = Stream;
declare function Stream(transport: any, options: any): void;
declare class Stream {
    constructor(transport: any, options: any);
    transport: any;
    debugger: boolean | ((mode: any, data: any) => void);
    close(next: any): void;
    write(data: any, options: any, next: any): void;
    readCoils(options: any, next: any): void;
    readDiscreteInputs(options: any, next: any): void;
    readHoldingRegisters(options: any, next: any): void;
    readInputRegisters(options: any, next: any): void;
    writeSingleCoil(options: any, next: any): void;
    writeSingleRegister(options: any, next: any): void;
    readExceptionStatus(options: any, next: any): void;
    getCommEventCounter(options: any, next: any): void;
    getCommEventLog(options: any, next: any): void;
    writeMultipleCoils(options: any, next: any): void;
    writeMultipleRegisters(options: any, next: any): void;
    readFileRecord(options: any, next: any): void;
    writeFileRecord(options: any, next: any): void;
    maskWriteRegister(options: any, next: any): void;
    readWriteMultipleRegisters(options: any, next: any): void;
    readFifoQueue(options: any, next: any): void;
    readDeviceIdentification(options: any, next: any): void;
    jablotronReadRegisterFromIndex(options: any, next: any): void;
}
