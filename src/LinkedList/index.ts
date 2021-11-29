import {LinkedList} from "./LinkedList";

const list = new LinkedList((num: number, num2: number) => num === num2);

list.append(10).append(20).append(30);
console.log(list.toString()); // 10 20 30

list.prepend(1);
console.log(list.toString()); // 1 10 20 30

list.deleteWithValue(20);
console.log(list.toString()); // 1 10 30
