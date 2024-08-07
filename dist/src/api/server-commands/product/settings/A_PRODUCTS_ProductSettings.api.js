"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.A_PRODUCTS_SERVER_COMMANDS__ProductSettingsAPI = void 0;
const a_auth_1 = require("@adaas/a-auth");
class A_PRODUCTS_SERVER_COMMANDS__ProductSettingsAPI extends a_auth_1.A_AUTH_AppInteractions_APIProvider {
    get baseURL() {
        return this.context.getConfigurationProperty('API_LOCATION');
    }
    /**
     *
     * This function is used to get product settings
     *
     * @param aseid
     * @returns
     */
    load(request, config) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this
                .get(`/products/${request.aseid}/settings`, {}, config);
        });
    }
    /**
     *  This function is used to update product settings
     *
     * @param request
     * @param meta
     * @returns
     */
    update(request, config) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this
                .put(`/products/${request.aseid}/settings`, request.settings, config);
        });
    }
}
exports.A_PRODUCTS_SERVER_COMMANDS__ProductSettingsAPI = A_PRODUCTS_SERVER_COMMANDS__ProductSettingsAPI;
//# sourceMappingURL=A_PRODUCTS_ProductSettings.api.js.map