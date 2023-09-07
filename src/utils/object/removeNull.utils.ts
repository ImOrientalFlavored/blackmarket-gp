//Remove properties with null values
export default function removeNull<T extends Record<string, unknown>>(obj: T): Partial<T> {
    return Object.entries(obj)
        .reduce((acc, [k, v]) => {
            // Check if v is an object before recursive call
            if (v !== null && typeof v === 'object' && !Array.isArray(v)) {
                return {...acc, [k]: removeNull(v as Record<string, unknown>)};
            } else if(v != null){
                return {...acc, [k]: v};
            } else {
                return acc;
            }
        }, {} as Partial<T>);
}