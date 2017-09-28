
import { FrameworkConfiguration, PLATFORM } from "aurelia-framework";


export function configure(config: FrameworkConfiguration) {
  config.globalResources(
    [
      PLATFORM.moduleName('./fusejs'),
      PLATFORM.moduleName('./fuse-highlight')
    ]);
}

// export * from "./fusejs";
// export * from "./fuse-highlighter";