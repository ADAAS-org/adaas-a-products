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
exports.A_PRODUCTS_APP_INTERACTIONS__WidgetAPI = void 0;
const a_auth_1 = require("@adaas/a-auth");
/**
 * API Provider for Widgets
 */
class A_PRODUCTS_APP_INTERACTIONS__WidgetAPI extends a_auth_1.A_AUTH_AppInteractions_APIProvider {
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
    list(request, 
    /**
     * The meta object to pass through API call for error handling or response handling
     */
    meta) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this
                .get('/widgets', Object.assign(Object.assign({}, request.pagination), request.filter), {
                meta
            });
        });
    }
    /**
     * API returns organization with nested entities such as profile, settings, etc.
     *
     * @param request
     * @param meta
     * @returns
     */
    load(request, 
    /**
     * The meta object to pass through API call for error handling or response handling
     */
    meta) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this
                .get(`/widgets/${request.aseid}`, {}, {
                meta
            });
        });
    }
    /**
     *  API creates organization with required dependencies
     *
     * @param request
     * @param meta
     * @returns
     */
    create(request, 
    /**
     * The meta object to pass through API call for error handling or response handling
     */
    meta) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this
                .post(`/widgets`, request, {
                meta
            });
        });
    }
    /**
    * This function is used to create organization
    *
    * @param organization
    * @returns
    */
    update(request, 
    /**
     * The meta object to pass through API call for error handling or response handling
     */
    meta) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this
                .post(`/widgets/${request.aseid}`, request, {
                meta
            });
        });
    }
}
exports.A_PRODUCTS_APP_INTERACTIONS__WidgetAPI = A_PRODUCTS_APP_INTERACTIONS__WidgetAPI;
//# sourceMappingURL=A_PRODUCTS_Widget.api.js.map