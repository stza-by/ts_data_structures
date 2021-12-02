import {strictEqual} from "assert/strict";
import {Comparator} from "./Comparator";

type Car = {
    speed: number;
}

console.log('Comparator test');

const carCompareFn = (carA: Car, carB: Car) => carA.speed - carB.speed;
const comparatorInstanceDefault = new Comparator<number>();
const comparatorWithCustomFn = new Comparator(carCompareFn);

strictEqual(comparatorInstanceDefault.equal(1, 10), false);
strictEqual(comparatorInstanceDefault.lessThen(1, 10), true);
strictEqual(comparatorInstanceDefault.lessThenOrEqual(11, 10), false);
strictEqual(comparatorInstanceDefault.greaterThen(10, 10), false);
strictEqual(comparatorInstanceDefault.greaterThenOrEqual(10, 10), true);
strictEqual(comparatorWithCustomFn.equal({speed: 11}, {speed: 121}), false);

