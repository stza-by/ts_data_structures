export type CompareFunction<T> = (a: T, b: T) => number;

function defaultCompareFunction<T>(a: T, b: T): number {
    if (a === b) return 0;
    return a > b ? 1 : -1;
}

export class Comparator<T> {
    private compare: CompareFunction<T>;

    constructor(compareFunction?: CompareFunction<T>) {
        this.compare = compareFunction ?? defaultCompareFunction;
    }

    public equal(a: T, b: T): boolean {
        return this.compare(a, b) === 0;
    }

    public lessThen(a: T, b: T): boolean {
        return this.compare(a, b) < 0;
    }

    public greaterThen(a: T, b: T): boolean {
        return this.compare(a, b) > 0;
    }

    public lessThenOrEqual(a: T, b: T): boolean {
        return this.lessThen(a, b) || this.equal(a, b);
    }

    public greaterThenOrEqual(a: T, b: T): boolean {
        return this.greaterThen(a, b) || this.equal(a, b);
    }

    public reverse() {
        const originalComparator = this.compare;
        this.compare = (a, b) => originalComparator(b, a);
    }
}
