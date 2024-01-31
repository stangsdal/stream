export = Driver;
declare function Driver(): void;
declare namespace Driver {
    function connect(device: any, options: any): {
        attach: (transport: any, next: any) => any;
    };
}
