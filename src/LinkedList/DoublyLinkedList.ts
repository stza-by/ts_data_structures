import {Comparator} from "./LinkedList";

class Node<T> {
    next: Node<T> | null = null;
    prev: Node<T> | null = null;

    constructor(public data: T) {
    };
}

export class DoublyLinkedList<T> {
    private head: Node<T> | null = null;

    constructor(public comparator: Comparator<T>) {
    }

    private getLast(node: Node<T>): Node<T> {
        return node.next ? this.getLast(node.next) : node;
    }

    append(data: T) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
        } else {
            const last = this.getLast(this.head);
            last.next = newNode;
            newNode.prev = last;
        }

        return this;
    }


    prepend(data: T): DoublyLinkedList<T> {
        const newNode = new Node(data);

        if (!this.head) {
            this.head = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode
        }

        return this;
    }

    deleteByValue(data: T): DoublyLinkedList<T> {
            let current = this.head;
            while (current !== null) {
                if(this.comparator(data, current.data)) {

                    if(this.head === current) {
                        this.head = this.head.next;

                        if (this.head?.prev) {
                            this.head.prev = null;
                        }
                    } else {
                        if (current.prev) {
                            current.prev.next = current.next;
                        }

                        if(current.next) {
                            current.next.prev = current.prev;
                        }
                    }

                    break;
                }
                current = current.next
            }

        return this;
    }

    forEach(cb: (data: T) => void) {
        let current = this.head;
        while (current) {
            cb(current.data);
            current = current.next;
        }

        return this;
    }

    toArray() {
        const arr: T[] = [];
        this.forEach((data) => arr.push(data));
        return arr;
    }

    toString(): string {
        if (!this.head) {
            return 'Empty';
        }

        let str = '';

        this.forEach((data) => {
            str = str.concat(JSON.stringify(data) + '\n');
        })

        return str;
    }
}
