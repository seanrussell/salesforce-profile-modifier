"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OSUtil = void 0;
class OSUtil {
    static toUnixStyle(path) {
        return path.replace(/\\/g, "/");
    }
    static isWindowsOs() {
        const operatingsystem = process.platform;
        if (operatingsystem.includes('win')) {
            return true;
        }
        else {
            return false;
        }
    }
}
exports.OSUtil = OSUtil;
//# sourceMappingURL=osUtils.js.map