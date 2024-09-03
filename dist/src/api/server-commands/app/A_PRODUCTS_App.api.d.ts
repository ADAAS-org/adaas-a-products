import { A_AUTH_ServerCommands_APIProvider, A_AUTH_TYPES__APIProviderRequestConfig } from "@adaas/a-auth";
import { A_PRODUCTS_ContextClass } from "../../../global/A_PRODUCTS_Context.class";
import { A_PRODUCTS_SERVER_COMMANDS_TYPES__AppCreateRequest, A_PRODUCTS_SERVER_COMMANDS_TYPES__AppCreateResponse, A_PRODUCTS_SERVER_COMMANDS_TYPES__AppGetRequest, A_PRODUCTS_SERVER_COMMANDS_TYPES__AppGetResponse, A_PRODUCTS_SERVER_COMMANDS_TYPES__AppListRequest, A_PRODUCTS_SERVER_COMMANDS_TYPES__AppListResponse, A_PRODUCTS_SERVER_COMMANDS_TYPES__AppUpdateRequest, A_PRODUCTS_SERVER_COMMANDS_TYPES__AppUpdateResponse } from "./A_PRODUCTS_App.types";
/**
 * API Provider for Apps
 */
export declare class A_PRODUCTS_SERVER_COMMANDS__AppAPI extends A_AUTH_ServerCommands_APIProvider<A_PRODUCTS_ContextClass> {
    protected get baseURL(): string;
    /**
     * Returns list of apps based on User Access
     *
     * @param request
     * @param meta
     * @returns
     */
    list<M = any>(request: A_PRODUCTS_SERVER_COMMANDS_TYPES__AppListRequest, config?: A_AUTH_TYPES__APIProviderRequestConfig<M>): Promise<A_PRODUCTS_SERVER_COMMANDS_TYPES__AppListResponse>;
    /**
     * API returns app with nested entities such as profile, settings, etc.
     *
     * @param request
     * @param meta
     * @returns
     */
    load<M = any>(request: A_PRODUCTS_SERVER_COMMANDS_TYPES__AppGetRequest, config?: A_AUTH_TYPES__APIProviderRequestConfig<M>): Promise<A_PRODUCTS_SERVER_COMMANDS_TYPES__AppGetResponse>;
    /**
     *  API creates app with required dependencies
     *
     * @param request
     * @param meta
     * @returns
     */
    create<M = any>(request: A_PRODUCTS_SERVER_COMMANDS_TYPES__AppCreateRequest, config?: A_AUTH_TYPES__APIProviderRequestConfig<M>): Promise<A_PRODUCTS_SERVER_COMMANDS_TYPES__AppCreateResponse>;
    /**
    * This function is used to create app
    *
    * @param app
    * @returns
    */
    update<M = any>(request: A_PRODUCTS_SERVER_COMMANDS_TYPES__AppUpdateRequest, config?: A_AUTH_TYPES__APIProviderRequestConfig<M>): Promise<A_PRODUCTS_SERVER_COMMANDS_TYPES__AppUpdateResponse>;
}
