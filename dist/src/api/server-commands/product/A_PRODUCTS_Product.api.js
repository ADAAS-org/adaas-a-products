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
exports.A_PRODUCTS_SERVER_COMMANDS__ProductAPI = void 0;
const a_auth_1 = require("@adaas/a-auth");
/**
 * API Provider for Products
 */
class A_PRODUCTS_SERVER_COMMANDS__ProductAPI extends a_auth_1.A_AUTH_AppInteractions_APIProvider {
    get baseURL() {
        return this.context.getConfigurationProperty('API_LOCATION');
    }
    /**
     * Returns list of products based on User Access
     *
     * @param request
     * @param meta
     * @returns
     */
    list(request, config) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this
                .get('/products', request, config);
        });
    }
    /**
     * API returns organization with nested entities such as profile, settings, etc.
     *
     * @param request
     * @param meta
     * @returns
     */
    load(request, config) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this
                .get(`/products/${request.orgASEID}`, {}, config);
        });
    }
    /**
     *  API creates organization with required dependencies
     *
     * @param request
     * @param meta
     * @returns
     */
    create(request, config) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this
                .post(`/products`, request, config);
        });
    }
    /**
    * This function is used to create organization
    *
    * @param organization
    * @returns
    */
    update(request, config) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this
                .post(`/products/${request.aseid}`, request, config);
        });
    }
}
exports.A_PRODUCTS_SERVER_COMMANDS__ProductAPI = A_PRODUCTS_SERVER_COMMANDS__ProductAPI;
//# sourceMappingURL=A_PRODUCTS_Product.api.js.map