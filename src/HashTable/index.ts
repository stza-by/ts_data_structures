import {deepStrictEqual} from "assert/strict";
import {HashTable} from "./HashTable";

type Person = {
    name: string,
    age: number
}

console.log('Hash Table')

const hashTable = new HashTable<Person>();

const John = {name: 'John', age: 11};
const Daniel = {name: 'Daniel', age: 12};

hashTable.set(John.name, John);
hashTable.set(Daniel.name, Daniel);

deepStrictEqual(hashTable.get('John'), John);
deepStrictEqual(hashTable.get('Daniel'), Daniel);

deepStrictEqual(hashTable.has('Daniel'), true);
deepStrictEqual(hashTable.has('Ricardo'), false);

deepStrictEqual(hashTable.getKeys(), ['John', 'Daniel']);
