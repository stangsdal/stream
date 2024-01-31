/// <reference types="node" />
export = Driver;
declare function Driver(): void;
declare namespace Driver {
    function connect(port: any, host: any, options: any): {
        attach: (transport: any, next: any) => any;
    };
    function server(options: any): {
        attach: (transport: any, next: any) => net.Server;
    };
}
import net = require("net");
