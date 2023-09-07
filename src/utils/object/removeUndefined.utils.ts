
export default function removeUndefined<T extends Record<string, unknown>>(obj: T): Partial<T> {
    return Object.entries(obj)
        .reduce((acc, [k, v]) => {
            // Check if v is an object before recursive call
            if (v !== null && typeof v === 'object' && !Array.isArray(v)) {
                return {...acc, [k]: removeUndefined(v as Record<string, unknown>)};
            } else if(v !== undefined){
                return {...acc, [k]: v};
            } else {
                return acc;
            }
        }, {} as Partial<T>);
}