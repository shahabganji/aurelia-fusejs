
function deepGetByArray(obj: any, propsArray: any, defaultValue: any): any {

    if (obj === undefined || obj === null) {
        return defaultValue;
    }
    if (propsArray.length === 0) {
        return obj;
    }


    var foundSoFar = obj[propsArray[0]];
    var remainingProps = propsArray.slice(1);

    return deepGetByArray(foundSoFar, remainingProps, defaultValue);
};

export function deepGet(obj: any, props: any, defaultValue: any): any {

    if (typeof props === "string") {
        props = props.split(".");
    }
    return deepGetByArray(obj, props, defaultValue);
};

export function deepSet(obj: any, path: string, value: any) {

    var keys = Array.isArray(path) ? path : path.split('.');
    for (var i = 0; i < keys.length - 1; i++) {
        var key = keys[i];
        obj[key] = {};
        obj = obj[key];
    }
    obj[keys[i]] = value;
    return value;
}