const DEFAULT_SIZE = 32;

export class HashTable<T> {
    private readonly buckets: Array<{ key: string, value: T }[]>;
    private readonly keys: { [key: string]: number };

    constructor(public size: number = DEFAULT_SIZE) {
        this.buckets = Array(size).fill(null).map(() => []);
        this.keys = {};
    }

    private hash(key: string): number {
        const hash = Array
            .from(key)
            .reduce((hash, char) => hash + char.charCodeAt(0), 0);

        return hash % this.size;
    }

    public set(key: string, value: T): void {
        const keyHash = this.hash(key);

        if (!this.keys[key]) {
            this.keys[key] = keyHash;
        }

        const bucketArr = this.buckets[keyHash];
        const existedRecord = bucketArr.find((record) => record.key === key);

        if (existedRecord) {
            existedRecord.value = value;
        } else {
            bucketArr.push({key, value})
        }
    }

    public get(key: string): T | undefined {
        const bucketArr = this.buckets[this.hash(key)];
        const existedRecord = bucketArr.find((record) => record.key === key);

        return existedRecord ? existedRecord.value : undefined;
    }

    public has(key: string): boolean {
        return this.keys.hasOwnProperty(key);
    }

    public getKeys() {
        return Object.keys(this.keys);
    }

    public getValues(): T[] {
        console.log(this.buckets);
        return this.buckets.reduce((values, bucket) => {
            const bucketValues = bucket.map(record => record.value);
            return values.concat(bucketValues);
        }, [] as T[])
    }
}
