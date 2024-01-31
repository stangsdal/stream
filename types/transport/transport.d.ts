export = BaseTransport;
declare function BaseTransport(stream: any, options: any): void;
declare class BaseTransport {
    constructor(stream: any, options: any);
    stream: any;
    retries: any;
    retry: any;
    beforerequest: any;
    afterrequest: any;
    mutex: any;
    retryTimer: {};
    closed: boolean;
    close(next: any): void;
    write(data: any, next: any): void;
    send(fcode: any, extra: any, next: any, ...args: any[]): any;
    retrySend(data: any, retries: any, retry: any, next: any): void;
    clearSend(): void;
    listen(): void;
}
