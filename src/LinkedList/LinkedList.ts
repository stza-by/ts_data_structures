export interface Comparator<T> {
    (elementA: T, elementB: T): boolean;
}

interface ILinkedListNode<T> {
    next: ILinkedListNode<T> | null;
    data: T;
}

class Node<T> implements ILinkedListNode<T> {
    next: Node<T> | null = null;

    constructor(public data: T) {
    }

    toString() {
        return JSON.stringify(this.data);
    }
}

export class LinkedList<T> {
    protected head: Node<T> | null = null;

    constructor(public comparator: Comparator<T>) {
    }

    append(data: T): LinkedList<T> {
        if (this.head === null) {
            this.head = new Node<T>(data);
            return this;
        }

        let current = this.head;
        while (current.next !== null) {
            current = current.next;
        }
        current.next = new Node(data);
        return this;
    }

    prepend(data: T): LinkedList<T> {
        const newHead = new Node(data);
        newHead.next = this.head;
        this.head = newHead;
        return this;
    }

    deleteWithValue(data: T): LinkedList<T> {
        if (!this.head) {
            return this;
        }

        if (this.comparator(data, this.head.data)) {
            this.head = this.head.next;
            return this;
        }

        for (let current = this.head; current.next !== null; current = current.next) {
            if (this.comparator(data, current.next.data)) {
                current.next = current.next.next;
                return this;
            }
        }

        return this;
    }

    toArray(): T[] {
        const array: T[] = [];
        
        for (let current = this.head; current !== null; current = current.next) {
            array.push(current.data);
        }

        return array;
    }

    toString(): string {
        if (!this.head) {
            return 'Empty';
        }

        let current: Node<T> | null = this.head;
        let str = '';

        while (current !== null) {
            str = str.concat(current.toString() + '\n');
            current = current.next;
        }

        return str;
    }

}

