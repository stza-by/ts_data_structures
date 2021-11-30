import {deepStrictEqual} from 'assert/strict';
import {LinkedList} from "./LinkedList";
import {DoublyLinkedList} from "./DoublyLinkedList";

const list = new LinkedList((num: number, num2: number) => num === num2);

list
    .append(10)
    .append(20)
    .append(30);
deepStrictEqual(list.toArray(), [10, 20, 30]);

list.prepend(1);
deepStrictEqual(list.toArray(), [1, 10, 20, 30]);

list.deleteWithValue(20);
deepStrictEqual(list.toArray(), [1, 10, 30]);

list.deleteHead();
deepStrictEqual(list.toArray(), [10, 30]);

console.log('Doubly Linked List');

const doublyLinkedList = new DoublyLinkedList((str1: string, str2: string) => str1 === str2);

doublyLinkedList
    .append('first')
    .append('second')
    .append('third')
    .append('fourth')
deepStrictEqual(doublyLinkedList.toArray(), ['first', 'second', 'third', 'fourth']);

doublyLinkedList.prepend('zero');
deepStrictEqual(doublyLinkedList.toArray(), ['zero' ,'first', 'second', 'third', 'fourth']);

doublyLinkedList.deleteByValue('zero');
deepStrictEqual(doublyLinkedList.toArray(), ['first', 'second', 'third', 'fourth']);

doublyLinkedList.deleteByValue('fourth');
deepStrictEqual(doublyLinkedList.toArray(), ['first', 'second', 'third']);

doublyLinkedList.deleteByValue('second');
deepStrictEqual(doublyLinkedList.toArray(), ['first', 'third']);

