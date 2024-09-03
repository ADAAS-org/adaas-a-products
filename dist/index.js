"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.A_PRODUCTS_CONSTANTS__ERROR_CODES = exports.A_PRODUCTS_CONSTANTS__DEFAULT_ERRORS = exports.A_PRODUCTS_ServerDelegate = exports.A_PRODUCTS_ServerCommands = exports.A_PRODUCTS_AppInteractions = exports.A_PRODUCTS_ContextClass = exports.A_PRODUCTS_Context = void 0;
var A_PRODUCTS_Context_def_1 = require("./src/definitions/A_PRODUCTS_Context.def");
Object.defineProperty(exports, "A_PRODUCTS_Context", { enumerable: true, get: function () { return A_PRODUCTS_Context_def_1.A_PRODUCTS_Context; } });
// ============ Export Global & Service Entities ============
var A_PRODUCTS_Context_class_1 = require("./src/global/A_PRODUCTS_Context.class");
Object.defineProperty(exports, "A_PRODUCTS_ContextClass", { enumerable: true, get: function () { return A_PRODUCTS_Context_class_1.A_PRODUCTS_ContextClass; } });
// ================== API ==================
exports.A_PRODUCTS_AppInteractions = __importStar(require("./src/api/app-interactions"));
exports.A_PRODUCTS_ServerCommands = __importStar(require("./src/api/server-commands"));
exports.A_PRODUCTS_ServerDelegate = __importStar(require("./src/api/server-delegate"));
// ============ CONSTANTS Export ============
var errors_constants_1 = require("./src/constants/errors.constants");
Object.defineProperty(exports, "A_PRODUCTS_CONSTANTS__DEFAULT_ERRORS", { enumerable: true, get: function () { return errors_constants_1.A_PRODUCTS_CONSTANTS__DEFAULT_ERRORS; } });
Object.defineProperty(exports, "A_PRODUCTS_CONSTANTS__ERROR_CODES", { enumerable: true, get: function () { return errors_constants_1.A_PRODUCTS_CONSTANTS__ERROR_CODES; } });
// ============ TYPES Export ============
__exportStar(require("./src/lib/entities/app/A_PRODUCTS_App.types"), exports);
__exportStar(require("./src/lib/entities/product/A_PRODUCTS_Product.types"), exports);
__exportStar(require("./src/lib/entities/product/A_PRODUCTS_ProductBranding.types"), exports);
// ============ API TYPES Export ============
__exportStar(require("./src/api/app-interactions/index.types"), exports);
__exportStar(require("./src/api/server-commands/index.types"), exports);
__exportStar(require("./src/api/server-delegate/index.types"), exports);
//# sourceMappingURL=index.js.map