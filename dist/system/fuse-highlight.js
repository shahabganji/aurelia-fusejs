System.register(["./deep"], function (exports_1, context_1) {
    var __moduleName = context_1 && context_1.id;
    var deep_1, FuseHighlightValueConverter;
    return {
        setters: [
            function (deep_1_1) {
                deep_1 = deep_1_1;
            }
        ],
        execute: function () {
            FuseHighlightValueConverter = (function () {
                function FuseHighlightValueConverter() {
                }
                FuseHighlightValueConverter.prototype.toView = function (value, cssClass) {
                    cssClass = cssClass || '';
                    var counter = value.length;
                    while (counter--) {
                        value[counter].item.highlighted = {};
                        var matchesCounter = value[counter].matches.length;
                        while (matchesCounter--) {
                            var result = [];
                            var fieldName = value[counter].matches[matchesCounter].key;
                            var text = deep_1.deepGet(value[counter].item, fieldName.split('.'), {});
                            var matches = value[counter].matches[matchesCounter].indices;
                            var pair = matches.shift();
                            for (var i = 0; i < text.length; i++) {
                                var char = text.charAt(i);
                                if (pair && i == pair[0]) {
                                    result.push("<span class='" + cssClass + "'>");
                                }
                                result.push(char);
                                if (pair && i == pair[1]) {
                                    result.push('</span>');
                                    pair = matches.shift();
                                }
                            }
                            var highlightedValue = result.join('');
                            deep_1.deepSet(value[counter].item.highlighted, fieldName, highlightedValue);
                        }
                    }
                    return value;
                };
                return FuseHighlightValueConverter;
            }());
            exports_1("FuseHighlightValueConverter", FuseHighlightValueConverter);
        }
    };
});

//# sourceMappingURL=fuse-highlight.js.map
