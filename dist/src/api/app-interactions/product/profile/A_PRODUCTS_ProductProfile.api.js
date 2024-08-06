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
exports.A_PRODUCTS_APP_INTERACTIONS__ProductProfileAPI = void 0;
const a_auth_1 = require("@adaas/a-auth");
class A_PRODUCTS_APP_INTERACTIONS__ProductProfileAPI extends a_auth_1.A_AUTH_AppInteractions_APIProvider {
    get baseURL() {
        return this.context.getConfigurationProperty('API_LOCATION');
    }
    /**
     *
     * This function is used to get product profile
     *
     * @param orgASEID
     * @returns
     */
    load(request, 
    /**
     * The meta object to pass through API call for error handling or response handling
     */
    meta) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this
                .get(`/products/${request.orgASEID}/profile`, {}, {
                meta
            });
        });
    }
    /**
     *  This function is used to upload product logo
     *
     * @param request
     * @param meta
     * @returns
     */
    uploadLogo(request, 
    /**
     * The meta object to pass through API call for error handling or response handling
     */
    meta) {
        return __awaiter(this, void 0, void 0, function* () {
            const formData = new FormData();
            formData.append('productLogo', request.file);
            return yield this
                .post(`/products/${request.orgASEID}/profile/logo`, formData, {
                meta,
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
        });
    }
    /**
     *  This function is used to update product profile
     *
     * @param request
     * @param meta
     * @returns
     */
    update(request, 
    /**
     * The meta object to pass through API call for error handling or response handling
     */
    meta) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this
                .put(`/products/${request.orgASEID}/profile`, request.profile, {
                meta
            });
        });
    }
}
exports.A_PRODUCTS_APP_INTERACTIONS__ProductProfileAPI = A_PRODUCTS_APP_INTERACTIONS__ProductProfileAPI;
//# sourceMappingURL=A_PRODUCTS_ProductProfile.api.js.map