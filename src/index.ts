// Pick: Simplifies creating a new object with selected properties
export function pick<T extends object, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> {
    const result = {} as Pick<T, K>;
    keys.forEach(key => {
        if (key in obj) {
            result[key] = obj[key];
        }
    });
    return result;
}

// Partial: Creates an object with all properties optional
export function makePartial<T extends object>(obj: T): Partial<T> {
    const result = {} as Partial<T>;
    (Object.keys(obj) as (keyof T)[]).forEach(key => {
        result[key] = obj[key];
    });
    return result;
}

// Readonly: Creates a readonly version of an object
export function makeReadonly<T extends object>(obj: T): Readonly<T> {
    return Object.freeze({ ...obj });
}

// Record: Creates a map of key-value pairs where keys are of type K and values of type T
export function createRecord<K extends keyof any, T>(keys: K[], value: T): Record<K, T> {
    const result = {} as Record<K, T>;
    keys.forEach(key => {
        result[key] = value;
    });
    return result;
}

// Exclude: Exclude properties from a union type
export function excludeFromUnion<T, U>(union: T[], exclude: U[]): Exclude<T, U>[] {
    return union.filter(item => !exclude.includes(item as unknown as U)) as Exclude<T, U>[];
}

// Map: Creates a simple map from an object
export function createMap<T extends Record<string, any>, U>(obj: T, mapFn: (value: T[keyof T], key: keyof T) => U): { [K in keyof T]: U } {
    const result = {} as { [K in keyof T]: U };
    (Object.keys(obj) as (keyof T)[]).forEach(key => {
        result[key] = mapFn(obj[key], key);
    });
    return result;
}
