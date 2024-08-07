import { A_AUTH_ServerDelegate_APIProvider, A_AUTH_ServerDelegateAuthenticator, A_AUTH_TYPES__APIProviderRequestConfig } from "@adaas/a-auth";
import { A_PRODUCTS_ContextClass } from "../../../../global/A_PRODUCTS_Context.class";
import { A_PRODUCTS_SERVER_DELEGATE_TYPES__ProductSettingsGetRequest, A_PRODUCTS_SERVER_DELEGATE_TYPES__ProductSettingsUpdateRequest } from "./A_PRODUCTS_ProductSettings.types";
import { A_SDK_TYPES__Required } from "@adaas/a-sdk-types";
export declare class A_PRODUCTS_SERVER_DELEGATE__ProductSettingsAPI extends A_AUTH_ServerDelegate_APIProvider<A_PRODUCTS_ContextClass> {
    protected get baseURL(): string;
    /**
     *
     * This function is used to get product settings
     *
     * @param aseid
     * @returns
     */
    load<M = any>(request: A_PRODUCTS_SERVER_DELEGATE_TYPES__ProductSettingsGetRequest, config: A_SDK_TYPES__Required<A_AUTH_TYPES__APIProviderRequestConfig<M, A_AUTH_ServerDelegateAuthenticator>, ['authenticator']>): Promise<Partial<import("../../../app-interactions/index.types").A_PRODUCTS_TYPES__ProductSettings_APIEntity>>;
    /**
     *  This function is used to update product settings
     *
     * @param request
     * @param meta
     * @returns
     */
    update<M = any>(request: A_PRODUCTS_SERVER_DELEGATE_TYPES__ProductSettingsUpdateRequest, config: A_SDK_TYPES__Required<A_AUTH_TYPES__APIProviderRequestConfig<M, A_AUTH_ServerDelegateAuthenticator>, ['authenticator']>): Promise<Partial<import("../../../app-interactions/index.types").A_PRODUCTS_TYPES__ProductSettings_APIEntity>>;
}
