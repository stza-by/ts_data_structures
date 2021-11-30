import {deepStrictEqual} from 'assert/strict';
import {Stack} from "./Stack";

console.log('Stack');

const stackInstance = new Stack();

stackInstance
    .push(10)
    .push(20)
    .push(30);

deepStrictEqual(stackInstance.toArray(), [30, 20, 10]);

deepStrictEqual(stackInstance.pop(), 30);
deepStrictEqual(stackInstance.pop(), 20);
deepStrictEqual(stackInstance.peek(), 10);
deepStrictEqual(stackInstance.toArray(), [10]);
deepStrictEqual(stackInstance.isEmpty(), false);


