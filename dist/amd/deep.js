define(["require", "exports"], function (require, exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    function deepGetByArray(obj, propsArray, defaultValue) {
        if (obj === undefined || obj === null) {
            return defaultValue;
        }
        if (propsArray.length === 0) {
            return obj;
        }
        var foundSoFar = obj[propsArray[0]];
        var remainingProps = propsArray.slice(1);
        return deepGetByArray(foundSoFar, remainingProps, defaultValue);
    }
    ;
    function deepGet(obj, props, defaultValue) {
        if (typeof props === "string") {
            props = props.split(".");
        }
        return deepGetByArray(obj, props, defaultValue);
    }
    exports.deepGet = deepGet;
    ;
    function deepSet(obj, path, value) {
        var keys = Array.isArray(path) ? path : path.split('.');
        for (var i = 0; i < keys.length - 1; i++) {
            var key = keys[i];
            obj[key] = {};
            obj = obj[key];
        }
        obj[keys[i]] = value;
        return value;
    }
    exports.deepSet = deepSet;
});

//# sourceMappingURL=deep.js.map
