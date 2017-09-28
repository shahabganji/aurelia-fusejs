System.register(["fuse.js"], function (exports_1, context_1) {
    var __moduleName = context_1 && context_1.id;
    var Fuse, FuseValueConverter;
    return {
        setters: [
            function (Fuse_1) {
                Fuse = Fuse_1;
            }
        ],
        execute: function () {
            FuseValueConverter = (function () {
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
            exports_1("FuseValueConverter", FuseValueConverter);
        }
    };
});

//# sourceMappingURL=fusejs.js.map
