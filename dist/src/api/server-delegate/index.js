"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductProfile = exports.ProductSettings = exports.Product = exports.AppProfile = exports.AppSettings = exports.App = void 0;
const A_PRODUCTS_Context_def_1 = require("../../definitions/A_PRODUCTS_Context.def");
const A_PRODUCTS_Product_api_1 = require("./product/A_PRODUCTS_Product.api");
const A_PRODUCTS_ProductSettings_api_1 = require("./product/settings/A_PRODUCTS_ProductSettings.api");
const A_PRODUCTS_ProductProfile_api_1 = require("./product/profile/A_PRODUCTS_ProductProfile.api");
const A_PRODUCTS_AppProfile_api_1 = require("./app/profile/A_PRODUCTS_AppProfile.api");
const A_PRODUCTS_AppSettings_api_1 = require("./app/settings/A_PRODUCTS_AppSettings.api");
const A_PRODUCTS_App_api_1 = require("./app/A_PRODUCTS_App.api");
exports.App = new A_PRODUCTS_App_api_1.A_PRODUCTS_SERVER_DELEGATE__AppAPI(A_PRODUCTS_Context_def_1.A_PRODUCTS_Context);
exports.AppSettings = new A_PRODUCTS_AppSettings_api_1.A_PRODUCTS_SERVER_DELEGATE__AppSettingsAPI(A_PRODUCTS_Context_def_1.A_PRODUCTS_Context);
exports.AppProfile = new A_PRODUCTS_AppProfile_api_1.A_PRODUCTS_SERVER_DELEGATE__AppProfileAPI(A_PRODUCTS_Context_def_1.A_PRODUCTS_Context);
exports.Product = new A_PRODUCTS_Product_api_1.A_PRODUCTS_SERVER_DELEGATE__ProductAPI(A_PRODUCTS_Context_def_1.A_PRODUCTS_Context);
exports.ProductSettings = new A_PRODUCTS_ProductSettings_api_1.A_PRODUCTS_SERVER_DELEGATE__ProductSettingsAPI(A_PRODUCTS_Context_def_1.A_PRODUCTS_Context);
exports.ProductProfile = new A_PRODUCTS_ProductProfile_api_1.A_PRODUCTS_SERVER_DELEGATE__ProductProfileAPI(A_PRODUCTS_Context_def_1.A_PRODUCTS_Context);
//# sourceMappingURL=index.js.map