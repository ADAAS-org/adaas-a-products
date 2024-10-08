import { A_AUTH_ServerDelegate_APIProvider, A_AUTH_ServerDelegateAuthenticator, A_AUTH_TYPES__APIProviderRequestConfig } from "@adaas/a-auth";
import { A_PRODUCTS_ContextClass } from "../../../../global/A_PRODUCTS_Context.class";
import { A_PRODUCTS_SERVER_DELEGATE_TYPES__AppProfileGetRequest, A_PRODUCTS_SERVER_DELEGATE_TYPES__AppProfileLogoUploadRequest, A_PRODUCTS_SERVER_DELEGATE_TYPES__AppProfileLogoUploadResponse, A_PRODUCTS_SERVER_DELEGATE_TYPES__AppProfileUpdateRequest } from "./A_PRODUCTS_AppProfile.types";
import { A_SDK_TYPES__Required } from "@adaas/a-sdk-types";
export declare class A_PRODUCTS_SERVER_DELEGATE__AppProfileAPI extends A_AUTH_ServerDelegate_APIProvider<A_PRODUCTS_ContextClass> {
    protected get baseURL(): string;
    /**
     *
     * This function is used to get app profile
     *
     * @param aseid
     * @returns
     */
    load<M = any>(request: A_PRODUCTS_SERVER_DELEGATE_TYPES__AppProfileGetRequest, config: A_SDK_TYPES__Required<A_AUTH_TYPES__APIProviderRequestConfig<M, A_AUTH_ServerDelegateAuthenticator>, ['authenticator']>): Promise<Partial<import("../../../app-interactions/index.types").A_PRODUCTS_TYPES__AppProfile_APIEntity>>;
    /**
     *  This function is used to upload app logo
     *
     * @param request
     * @param meta
     * @returns
     */
    uploadLogo<M = any>(request: A_PRODUCTS_SERVER_DELEGATE_TYPES__AppProfileLogoUploadRequest, config: A_SDK_TYPES__Required<A_AUTH_TYPES__APIProviderRequestConfig<M, A_AUTH_ServerDelegateAuthenticator>, ['authenticator']>): Promise<A_PRODUCTS_SERVER_DELEGATE_TYPES__AppProfileLogoUploadResponse>;
    /**
     *  This function is used to update app profile
     *
     * @param request
     * @param meta
     * @returns
     */
    update<M = any>(request: A_PRODUCTS_SERVER_DELEGATE_TYPES__AppProfileUpdateRequest, config: A_SDK_TYPES__Required<A_AUTH_TYPES__APIProviderRequestConfig<M, A_AUTH_ServerDelegateAuthenticator>, ['authenticator']>): Promise<Partial<import("../../../app-interactions/index.types").A_PRODUCTS_TYPES__AppProfile_APIEntity>>;
}
