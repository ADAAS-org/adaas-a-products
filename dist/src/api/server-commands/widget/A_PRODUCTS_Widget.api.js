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
exports.A_PRODUCTS_SERVER_COMMANDS__WidgetAPI = void 0;
const a_auth_1 = require("@adaas/a-auth");
/**
 * API Provider for Widgets
 */
class A_PRODUCTS_SERVER_COMMANDS__WidgetAPI extends a_auth_1.A_AUTH_ServerCommands_APIProvider {
    get baseURL() {
        return this.context.getConfigurationProperty('API_LOCATION');
    }
    /**
     * Returns list of widgets based on User Access
     *
     * @param request
     * @param meta
     * @returns
     */
    list(request, config) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this
                .get('/widgets', Object.assign(Object.assign({}, request.pagination), request.filter), config);
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
                .get(`/widgets/${request.aseid}`, {}, config);
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
                .post(`/widgets`, request, config);
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
                .post(`/widgets/${request.aseid}`, request, config);
        });
    }
    /**
    *
    * This function is used to delete widget
    *
    * @param request
    * @param config
    * @returns
    */
    remove(request, config) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this
                .delete(`/pages/${request.aseid}`, config);
        });
    }
    /**
     *  This function is used to migrate widgets during the build process of application
     *
     * @param request
     * @param config
     * @returns
     */
    migrate(request, config) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this
                .post(`/pages/migrate`, request, config);
        });
    }
}
exports.A_PRODUCTS_SERVER_COMMANDS__WidgetAPI = A_PRODUCTS_SERVER_COMMANDS__WidgetAPI;
//# sourceMappingURL=A_PRODUCTS_Widget.api.js.map