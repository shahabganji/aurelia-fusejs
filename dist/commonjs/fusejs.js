Object.defineProperty(exports, "__esModule", { value: true });
var Fuse = require("fuse.js");
var FuseValueConverter = (function () {
    function FuseValueConverter() {
    }
    FuseValueConverter.prototype.toView = function (value, options, criteria) {
        if (options == null || options == undefined)
            return value || [];
        if (!criteria) {
            options.threshold = 1;
            return new Fuse(value, options).search(' ');
        }
        var fuse = new Fuse(value, options);
        var result = fuse.search(criteria);
        console.log(result);
        return result;
    };
    return FuseValueConverter;
}());
exports.FuseValueConverter = FuseValueConverter;

//# sourceMappingURL=fusejs.js.map
