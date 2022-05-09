const l = console.log;

class Log {
    data = 'xxx';
    constructor(...args) {
        this.data = args
        l('\n');
        l(...this.data);
    }
    err() {
        l('!!! The Error !!!');
        return this
    }
    con(name) {
        l('The Controller: ', name);
        return this
    }
    place() {
        l('Line: 7; File: C/sdfsdf/sdfsdf/sdfsdf/sdfgsdg/sdfgsdg.js');
        return this
    }
}

const self = {
    log: (...data) => new Log(...data),
};

module.exports = self;