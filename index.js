const l = console.log;
// import chalk from 'chalk'; // Doc - https://www.npmjs.com/package/chalk /// !!! Problem with
// import ln from 'code-line-number';
import whoCalledMe from 'who-called-me';
// import whoCalledMe from '../who-called-me/index.js';

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
        // l(chalk.gray(`Line: ${ln('report')}. File: ${whoCalledMe('report')}`));
        l(whoCalledMe(3));
        return this
    }
    test() {
        l('hello');
        return this
    }
}

const log = (...data) => new Log(...data)

// Random string with 10 chars by default: 's5xoxqnit4', or longer
const randomString = (n = 1) => {
    let string = '';
    for (let i = 0; i < n; i++) {
        string += '-' + Math.random().toString(36).substr(2); // remove `0.` 
    };
    return string;
};

export { log, randomString };