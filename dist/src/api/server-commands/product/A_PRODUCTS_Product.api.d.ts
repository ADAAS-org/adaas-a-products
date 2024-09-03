import { A_AUTH_ServerCommands_APIProvider, A_AUTH_TYPES__APIProviderRequestConfig } from "@adaas/a-auth";
import { A_PRODUCTS_ContextClass } from "../../../global/A_PRODUCTS_Context.class";
import { A_PRODUCTS_SERVER_COMMANDS_TYPES__ProductCreateRequest, A_PRODUCTS_SERVER_COMMANDS_TYPES__ProductCreateResponse, A_PRODUCTS_SERVER_COMMANDS_TYPES__ProductGetRequest, A_PRODUCTS_SERVER_COMMANDS_TYPES__ProductGetResponse, A_PRODUCTS_SERVER_COMMANDS_TYPES__ProductListRequest, A_PRODUCTS_SERVER_COMMANDS_TYPES__ProductListResponse, A_PRODUCTS_SERVER_COMMANDS_TYPES__ProductUpdateRequest, A_PRODUCTS_SERVER_COMMANDS_TYPES__ProductUpdateResponse } from "./A_PRODUCTS_Product.types";
/**
 * API Provider for Products
 */
export declare class A_PRODUCTS_SERVER_COMMANDS__ProductAPI extends A_AUTH_ServerCommands_APIProvider<A_PRODUCTS_ContextClass> {
    protected get baseURL(): string;
    /**
     * Returns list of products based on User Access
     *
     * @param request
     * @param meta
     * @returns
     */
    list<M = any>(request: A_PRODUCTS_SERVER_COMMANDS_TYPES__ProductListRequest, config?: A_AUTH_TYPES__APIProviderRequestConfig<M>): Promise<A_PRODUCTS_SERVER_COMMANDS_TYPES__ProductListResponse>;
    /**
     * API returns organization with nested entities such as profile, settings, etc.
     *
     * @param request
     * @param meta
     * @returns
     */
    load<M = any>(request: A_PRODUCTS_SERVER_COMMANDS_TYPES__ProductGetRequest, config?: A_AUTH_TYPES__APIProviderRequestConfig<M>): Promise<A_PRODUCTS_SERVER_COMMANDS_TYPES__ProductGetResponse>;
    /**
     *  API creates organization with required dependencies
     *
     * @param request
     * @param meta
     * @returns
     */
    create<M = any>(request: A_PRODUCTS_SERVER_COMMANDS_TYPES__ProductCreateRequest, config?: A_AUTH_TYPES__APIProviderRequestConfig<M>): Promise<A_PRODUCTS_SERVER_COMMANDS_TYPES__ProductCreateResponse>;
    /**
    * This function is used to create organization
    *
    * @param organization
    * @returns
    */
    update<M = any>(request: A_PRODUCTS_SERVER_COMMANDS_TYPES__ProductUpdateRequest, config?: A_AUTH_TYPES__APIProviderRequestConfig<M>): Promise<A_PRODUCTS_SERVER_COMMANDS_TYPES__ProductUpdateResponse>;
}
