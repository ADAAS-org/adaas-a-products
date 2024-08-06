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
exports.A_PRODUCTS_SERVER_DELEGATE__AppSettingsAPI = void 0;
const a_auth_1 = require("@adaas/a-auth");
class A_PRODUCTS_SERVER_DELEGATE__AppSettingsAPI extends a_auth_1.A_AUTH_ServerDelegate_APIProvider {
    get baseURL() {
        return this.context.getConfigurationProperty('API_LOCATION');
    }
    /**
     *
     * This function is used to get app settings
     *
     * @param orgASEID
     * @returns
     */
    load(request, config) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this
                .get(`/apps/${request.orgASEID}/settings`, {}, config);
        });
    }
    /**
     *  This function is used to update app settings
     *
     * @param request
     * @param meta
     * @returns
     */
    update(request, config) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this
                .put(`/apps/${request.orgASEID}/settings`, request.settings, config);
        });
    }
}
exports.A_PRODUCTS_SERVER_DELEGATE__AppSettingsAPI = A_PRODUCTS_SERVER_DELEGATE__AppSettingsAPI;
//# sourceMappingURL=A_PRODUCTS_AppSettings.api.js.map