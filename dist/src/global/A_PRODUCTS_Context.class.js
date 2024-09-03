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
exports.A_PRODUCTS_ContextClass = void 0;
const a_sdk_types_1 = require("@adaas/a-sdk-types");
const errors_constants_1 = require("../constants/errors.constants");
const a_auth_1 = require("@adaas/a-auth");
/**
 * Global Context for A-Products sdk
 */
class A_PRODUCTS_ContextClass extends a_auth_1.A_AUTH_ContextClass {
    constructor() {
        super({
            namespace: 'a-products',
            errors: errors_constants_1.A_PRODUCTS_CONSTANTS__DEFAULT_ERRORS
        });
        /**
         * Global AUTH Context for the SDKs
         */
        this.auth = a_auth_1.A_AUTH_Context;
        this.API_LOCATION = 'https://api.products.adaas.org';
        this.productsContextAllowedProperties = [
            ...this.authContextAllowedProperties,
            "API_LOCATION"
        ];
    }
    awaitNestedDependencies() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.global.ready;
            yield this.auth.ready;
        });
    }
    getConfigurationProperty(property) {
        if (this.productsContextAllowedProperties.includes(property))
            return this[property];
        else
            this.Errors.throw(a_sdk_types_1.A_SDK_CONSTANTS__ERROR_CODES.CONFIGURATION_PROPERTY_NOT_EXISTS_OR_NOT_ALLOWED_TO_READ);
    }
    /**
     *  Configure the A_PRODUCTS_Context with provided configurations
     *
     * @param config
     */
    configure(config) {
        var _a;
        this.Logger.log('Configuring A_PRODUCTS_Context with provided configurations', config);
        this.API_LOCATION = ((_a = config.products) === null || _a === void 0 ? void 0 : _a.apiLocation) || this.API_LOCATION;
        super.configure(config);
        this.auth.configure(config);
    }
    getAuthenticator(userASEID, userScope) {
        /**
         * In case when the CLIENT_ID and CLIENT_SECRET provided
         * And their ENV NAMES comes from the ENV CORRESPONDING to the Context NAMESPACE
         *
         */
        if (this.CLIENT_ID && this.CLIENT_SECRET)
            return super.getAuthenticator(userASEID, userScope);
        /**
         * Otherwise Use the fallback to the A_AUTH Context
         */
        else
            return this.auth.getAuthenticator(userASEID, userScope);
    }
    loadExtendedConfigurationsFromEnvironment() {
        return __awaiter(this, void 0, void 0, function* () {
            this.API_LOCATION = process.env[this.getConfigurationProperty_ENV_Alias('API_LOCATION')] || this.API_LOCATION;
        });
    }
    loadExtendedConfigurationsFromFile(config) {
        return __awaiter(this, void 0, void 0, function* () {
            this.API_LOCATION = config[this.getConfigurationProperty_File_Alias('API_LOCATION')] || this.API_LOCATION;
        });
    }
}
exports.A_PRODUCTS_ContextClass = A_PRODUCTS_ContextClass;
//# sourceMappingURL=A_PRODUCTS_Context.class.js.map