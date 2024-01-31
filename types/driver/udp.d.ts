/// <reference types="node" />
export = Driver;
declare function Driver(): void;
declare namespace Driver {
    function connect(port: any, host: any, options: any): {
        attach: (transport: any, next: any) => dgram.Socket;
    };
    function server(options: any): {
        attach: (transport: any, next: any) => dgram.Socket;
    };
}
import dgram = require("dgram");
