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
exports.A_PRODUCTS_SERVER_COMMANDS__AppAPI = void 0;
const a_auth_1 = require("@adaas/a-auth");
/**
 * API Provider for Apps
 */
class A_PRODUCTS_SERVER_COMMANDS__AppAPI extends a_auth_1.A_AUTH_ServerCommands_APIProvider {
    get baseURL() {
        return this.context.getConfigurationProperty('API_LOCATION');
    }
    /**
     * Returns list of apps based on User Access
     *
     * @param request
     * @param meta
     * @returns
     */
    list(request, config) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this
                .get('/apps', Object.assign(Object.assign({}, request.pagination), request.filter), config);
        });
    }
    /**
     * API returns app with nested entities such as profile, settings, etc.
     *
     * @param request
     * @param meta
     * @returns
     */
    load(request, config) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this
                .get(`/apps/${request.aseid}`, {}, config);
        });
    }
    /**
     *  API creates app with required dependencies
     *
     * @param request
     * @param meta
     * @returns
     */
    create(request, config) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this
                .post(`/apps`, request, config);
        });
    }
    /**
    * This function is used to create app
    *
    * @param app
    * @returns
    */
    update(request, config) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this
                .post(`/apps/${request.aseid}`, request, config);
        });
    }
}
exports.A_PRODUCTS_SERVER_COMMANDS__AppAPI = A_PRODUCTS_SERVER_COMMANDS__AppAPI;
//# sourceMappingURL=A_PRODUCTS_App.api.js.map