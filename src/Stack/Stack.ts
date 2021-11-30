import {LinkedList} from "../LinkedList/LinkedList";

export class Stack<T> {
    private stack;

    constructor() {
        this.stack = new LinkedList<T>()
    }

    push(value: T): Stack<T> {
        this.stack.prepend(value);
        return this;
    }

    pop(): T | null {
        const headValue = this.stack.getHeadValue();

        if (headValue) {
            this.stack.deleteHead();
            return headValue;
        } else {
            return null;
        }

    }

    peek(): T | null {
        const headValue = this.stack.getHeadValue();
        return headValue ? headValue : null;
    }

    isEmpty(): boolean {
        return this.stack.isEmpty();
    }

    toArray(): T[] {
        return this.stack.toArray();
    }
}
