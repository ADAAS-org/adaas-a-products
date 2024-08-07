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
exports.A_PRODUCTS_SERVER_COMMANDS__AppProfileAPI = void 0;
const a_auth_1 = require("@adaas/a-auth");
class A_PRODUCTS_SERVER_COMMANDS__AppProfileAPI extends a_auth_1.A_AUTH_ServerCommands_APIProvider {
    get baseURL() {
        return this.context.getConfigurationProperty('API_LOCATION');
    }
    /**
     *
     * This function is used to get app profile
     *
     * @param aseid
     * @returns
     */
    load(request, config) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this
                .get(`/apps/${request.aseid}/profile`, {}, config);
        });
    }
    /**
     *  This function is used to upload app logo
     *
     * @param request
     * @param meta
     * @returns
     */
    uploadLogo(request, config) {
        return __awaiter(this, void 0, void 0, function* () {
            const formData = new FormData();
            formData.append('appLogo', request.file);
            return yield this
                .post(`/apps/${request.aseid}/profile/logo`, formData, Object.assign(Object.assign({}, config), { headers: {
                    'Content-Type': 'multipart/form-data'
                } }));
        });
    }
    /**
     *  This function is used to update app profile
     *
     * @param request
     * @param meta
     * @returns
     */
    update(request, config) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this
                .put(`/apps/${request.aseid}/profile`, request.profile, config);
        });
    }
}
exports.A_PRODUCTS_SERVER_COMMANDS__AppProfileAPI = A_PRODUCTS_SERVER_COMMANDS__AppProfileAPI;
//# sourceMappingURL=A_PRODUCTS_AppProfile.api.js.map