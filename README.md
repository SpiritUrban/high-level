# high-level
 A set of functions for the highest level of programming abstraction

## Installing

Using npm:

```bash
$ npm install high-level
```

## Example

```js
import { log } from 'high-level';

log('hello') // => hello
log('hello').place() // => hello + line of code and path to file
```


```js
import { randomString } from 'high-level';

randomString() // => -6jozwdca4qt
randomString(4) // => -6jozwdca4qt-2lz6ginqcff-dxb01ot3u1o-bmmoy8xz21h
```

