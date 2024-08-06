import { A_AUTH_ServerDelegate_APIProvider, A_AUTH_ServerDelegateAuthenticator, A_AUTH_TYPES__APIProviderRequestConfig } from "@adaas/a-auth";
import { A_PRODUCTS_ContextClass } from "../../../global/A_PRODUCTS_Context.class";
import { A_PRODUCTS_SERVER_DELEGATE_TYPES__ProductCreateRequest, A_PRODUCTS_SERVER_DELEGATE_TYPES__ProductCreateResponse, A_PRODUCTS_SERVER_DELEGATE_TYPES__ProductGetRequest, A_PRODUCTS_SERVER_DELEGATE_TYPES__ProductGetResponse, A_PRODUCTS_SERVER_DELEGATE_TYPES__ProductListRequest, A_PRODUCTS_SERVER_DELEGATE_TYPES__ProductListResponse, A_PRODUCTS_SERVER_DELEGATE_TYPES__ProductUpdateRequest, A_PRODUCTS_SERVER_DELEGATE_TYPES__ProductUpdateResponse } from "./A_PRODUCTS_Product.types";
import { A_SDK_TYPES__Required } from "@adaas/a-sdk-types";
/**
 * API Provider for Products
 */
export declare class A_PRODUCTS_SERVER_DELEGATE__ProductAPI extends A_AUTH_ServerDelegate_APIProvider<A_PRODUCTS_ContextClass> {
    protected get baseURL(): string;
    /**
     * Returns list of products based on User Access
     *
     * @param request
     * @param meta
     * @returns
     */
    list<M = any>(request: A_PRODUCTS_SERVER_DELEGATE_TYPES__ProductListRequest, config: A_SDK_TYPES__Required<A_AUTH_TYPES__APIProviderRequestConfig<M, A_AUTH_ServerDelegateAuthenticator>, ['authenticator']>): Promise<A_PRODUCTS_SERVER_DELEGATE_TYPES__ProductListResponse>;
    /**
     * API returns organization with nested entities such as profile, settings, etc.
     *
     * @param request
     * @param meta
     * @returns
     */
    load<M = any>(request: A_PRODUCTS_SERVER_DELEGATE_TYPES__ProductGetRequest, config: A_SDK_TYPES__Required<A_AUTH_TYPES__APIProviderRequestConfig<M, A_AUTH_ServerDelegateAuthenticator>, ['authenticator']>): Promise<A_PRODUCTS_SERVER_DELEGATE_TYPES__ProductGetResponse>;
    /**
     *  API creates organization with required dependencies
     *
     * @param request
     * @param meta
     * @returns
     */
    create<M = any>(request: A_PRODUCTS_SERVER_DELEGATE_TYPES__ProductCreateRequest, config: A_SDK_TYPES__Required<A_AUTH_TYPES__APIProviderRequestConfig<M, A_AUTH_ServerDelegateAuthenticator>, ['authenticator']>): Promise<A_PRODUCTS_SERVER_DELEGATE_TYPES__ProductCreateResponse>;
    /**
    * This function is used to create organization
    *
    * @param organization
    * @returns
    */
    update<M = any>(request: A_PRODUCTS_SERVER_DELEGATE_TYPES__ProductUpdateRequest, config: A_SDK_TYPES__Required<A_AUTH_TYPES__APIProviderRequestConfig<M, A_AUTH_ServerDelegateAuthenticator>, ['authenticator']>): Promise<A_PRODUCTS_SERVER_DELEGATE_TYPES__ProductUpdateResponse>;
}
