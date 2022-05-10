const l = console.log;
import chalk from 'chalk'; // Doc - https://www.npmjs.com/package/chalk
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
        l(chalk.gray(`${whoCalledMe(3, 'report')}`));
        return this
    }
}

const log = (...data) => new Log(...data)

export { log };