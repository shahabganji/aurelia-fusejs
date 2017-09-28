Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
function configure(config) {
    config.globalResources([
        aurelia_framework_1.PLATFORM.moduleName('./fusejs'),
        aurelia_framework_1.PLATFORM.moduleName('./fuse-highlighter')
    ]);
}
exports.configure = configure;

//# sourceMappingURL=aurelia-fuse.js.map
