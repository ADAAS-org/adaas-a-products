import { A_AUTH_ServerCommands_APIProvider, A_AUTH_TYPES__APIProviderRequestConfig } from "@adaas/a-auth";
import { A_PRODUCTS_ContextClass } from "../../../global/A_PRODUCTS_Context.class";
import { A_PRODUCTS_SERVER_COMMANDS_TYPES__PageCreateRequest, A_PRODUCTS_SERVER_COMMANDS_TYPES__PageCreateResponse, A_PRODUCTS_SERVER_COMMANDS_TYPES__PageDeleteRequest, A_PRODUCTS_SERVER_COMMANDS_TYPES__PageDeleteResponse, A_PRODUCTS_SERVER_COMMANDS_TYPES__PageGetRequest, A_PRODUCTS_SERVER_COMMANDS_TYPES__PageGetResponse, A_PRODUCTS_SERVER_COMMANDS_TYPES__PageListRequest, A_PRODUCTS_SERVER_COMMANDS_TYPES__PageListResponse, A_PRODUCTS_SERVER_COMMANDS_TYPES__PageMigrateRequest, A_PRODUCTS_SERVER_COMMANDS_TYPES__PageMigrateResponse, A_PRODUCTS_SERVER_COMMANDS_TYPES__PageUpdateRequest, A_PRODUCTS_SERVER_COMMANDS_TYPES__PageUpdateResponse } from "./A_PRODUCTS_Page.types";
/**
 * API Provider for Pages
 */
export declare class A_PRODUCTS_SERVER_COMMANDS__PageAPI extends A_AUTH_ServerCommands_APIProvider<A_PRODUCTS_ContextClass> {
    protected get baseURL(): string;
    /**
     *
     * Returns list of pages based on App Access
     *
     * @param request
     * @param config
     * @returns
     */
    list<M = any>(request: A_PRODUCTS_SERVER_COMMANDS_TYPES__PageListRequest, config?: A_AUTH_TYPES__APIProviderRequestConfig<M>): Promise<A_PRODUCTS_SERVER_COMMANDS_TYPES__PageListResponse>;
    /**
     * API returns page with nested entities such as profile, settings, etc.
     *
     * @param request
     * @param config
     * @returns
     */
    load<M = any>(request: A_PRODUCTS_SERVER_COMMANDS_TYPES__PageGetRequest, config?: A_AUTH_TYPES__APIProviderRequestConfig<M>): Promise<A_PRODUCTS_SERVER_COMMANDS_TYPES__PageGetResponse>;
    /**
     *
     * This function is used to create page
     *
     * @param request
     * @param config
     * @returns
     */
    create<M = any>(request: A_PRODUCTS_SERVER_COMMANDS_TYPES__PageCreateRequest, config?: A_AUTH_TYPES__APIProviderRequestConfig<M>): Promise<A_PRODUCTS_SERVER_COMMANDS_TYPES__PageCreateResponse>;
    /**
     *
     * This function is used to update page
     *
     * @param request
     * @param config
     * @returns
     */
    update<M = any>(request: A_PRODUCTS_SERVER_COMMANDS_TYPES__PageUpdateRequest, config?: A_AUTH_TYPES__APIProviderRequestConfig<M>): Promise<A_PRODUCTS_SERVER_COMMANDS_TYPES__PageUpdateResponse>;
    /**
     *
     * This function is used to delete page
     *
     * @param request
     * @param config
     * @returns
     */
    remove<M = any>(request: A_PRODUCTS_SERVER_COMMANDS_TYPES__PageDeleteRequest, config?: A_AUTH_TYPES__APIProviderRequestConfig<M>): Promise<A_PRODUCTS_SERVER_COMMANDS_TYPES__PageDeleteResponse>;
    /**
     *  This function is used to migrate pages during the build process of application
     *
     * @param request
     * @param config
     * @returns
     */
    migrate<M = any>(request: A_PRODUCTS_SERVER_COMMANDS_TYPES__PageMigrateRequest, config?: A_AUTH_TYPES__APIProviderRequestConfig<M>): Promise<A_PRODUCTS_SERVER_COMMANDS_TYPES__PageMigrateResponse>;
}
