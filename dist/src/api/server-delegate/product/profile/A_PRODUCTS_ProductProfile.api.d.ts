import { A_AUTH_ServerDelegate_APIProvider, A_AUTH_ServerDelegateAuthenticator, A_AUTH_TYPES__APIProviderRequestConfig } from "@adaas/a-auth";
import { A_PRODUCTS_ContextClass } from "../../../../global/A_PRODUCTS_Context.class";
import { A_PRODUCTS_SERVER_DELEGATE_TYPES__ProductProfileGetRequest, A_PRODUCTS_SERVER_DELEGATE_TYPES__ProductProfileLogoUploadRequest, A_PRODUCTS_SERVER_DELEGATE_TYPES__ProductProfileLogoUploadResponse, A_PRODUCTS_SERVER_DELEGATE_TYPES__ProductProfileUpdateRequest } from "./A_PRODUCTS_ProductProfile.types";
import { A_SDK_TYPES__Required } from "@adaas/a-sdk-types";
export declare class A_PRODUCTS_SERVER_DELEGATE__ProductProfileAPI extends A_AUTH_ServerDelegate_APIProvider<A_PRODUCTS_ContextClass> {
    protected get baseURL(): string;
    /**
     *
     * This function is used to get product profile
     *
     * @param aseid
     * @returns
     */
    load<M = any>(request: A_PRODUCTS_SERVER_DELEGATE_TYPES__ProductProfileGetRequest, config: A_SDK_TYPES__Required<A_AUTH_TYPES__APIProviderRequestConfig<M, A_AUTH_ServerDelegateAuthenticator>, ['authenticator']>): Promise<Partial<import("../../../app-interactions/index.types").A_PRODUCTS_TYPES__ProductProfile_APIEntity>>;
    /**
     *  This function is used to upload product logo
     *
     * @param request
     * @param meta
     * @returns
     */
    uploadLogo<M = any>(request: A_PRODUCTS_SERVER_DELEGATE_TYPES__ProductProfileLogoUploadRequest, config: A_SDK_TYPES__Required<A_AUTH_TYPES__APIProviderRequestConfig<M, A_AUTH_ServerDelegateAuthenticator>, ['authenticator']>): Promise<A_PRODUCTS_SERVER_DELEGATE_TYPES__ProductProfileLogoUploadResponse>;
    /**
     *  This function is used to update product profile
     *
     * @param request
     * @param meta
     * @returns
     */
    update<M = any>(request: A_PRODUCTS_SERVER_DELEGATE_TYPES__ProductProfileUpdateRequest, config: A_SDK_TYPES__Required<A_AUTH_TYPES__APIProviderRequestConfig<M, A_AUTH_ServerDelegateAuthenticator>, ['authenticator']>): Promise<Partial<import("../../../app-interactions/index.types").A_PRODUCTS_TYPES__ProductProfile_APIEntity>>;
}
