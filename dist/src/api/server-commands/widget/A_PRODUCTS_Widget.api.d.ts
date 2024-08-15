import { A_AUTH_ServerCommands_APIProvider, A_AUTH_TYPES__APIProviderRequestConfig } from "@adaas/a-auth";
import { A_PRODUCTS_ContextClass } from "../../../global/A_PRODUCTS_Context.class";
import { A_PRODUCTS_SERVER_COMMANDS_TYPES__WidgetCreateRequest, A_PRODUCTS_SERVER_COMMANDS_TYPES__WidgetCreateResponse, A_PRODUCTS_SERVER_COMMANDS_TYPES__WidgetDeleteRequest, A_PRODUCTS_SERVER_COMMANDS_TYPES__WidgetDeleteResponse, A_PRODUCTS_SERVER_COMMANDS_TYPES__WidgetGetRequest, A_PRODUCTS_SERVER_COMMANDS_TYPES__WidgetGetResponse, A_PRODUCTS_SERVER_COMMANDS_TYPES__WidgetListRequest, A_PRODUCTS_SERVER_COMMANDS_TYPES__WidgetListResponse, A_PRODUCTS_SERVER_COMMANDS_TYPES__WidgetMigrateRequest, A_PRODUCTS_SERVER_COMMANDS_TYPES__WidgetMigrateResponse, A_PRODUCTS_SERVER_COMMANDS_TYPES__WidgetUpdateRequest, A_PRODUCTS_SERVER_COMMANDS_TYPES__WidgetUpdateResponse } from "./A_PRODUCTS_Widget.types";
/**
 * API Provider for Widgets
 */
export declare class A_PRODUCTS_SERVER_COMMANDS__WidgetAPI extends A_AUTH_ServerCommands_APIProvider<A_PRODUCTS_ContextClass> {
    protected get baseURL(): string;
    /**
     * Returns list of widgets based on User Access
     *
     * @param request
     * @param meta
     * @returns
     */
    list<M = any>(request: A_PRODUCTS_SERVER_COMMANDS_TYPES__WidgetListRequest, config?: A_AUTH_TYPES__APIProviderRequestConfig<M>): Promise<A_PRODUCTS_SERVER_COMMANDS_TYPES__WidgetListResponse>;
    /**
     * API returns organization with nested entities such as profile, settings, etc.
     *
     * @param request
     * @param meta
     * @returns
     */
    load<M = any>(request: A_PRODUCTS_SERVER_COMMANDS_TYPES__WidgetGetRequest, config?: A_AUTH_TYPES__APIProviderRequestConfig<M>): Promise<A_PRODUCTS_SERVER_COMMANDS_TYPES__WidgetGetResponse>;
    /**
     *  API creates organization with required dependencies
     *
     * @param request
     * @param meta
     * @returns
     */
    create<M = any>(request: A_PRODUCTS_SERVER_COMMANDS_TYPES__WidgetCreateRequest, config?: A_AUTH_TYPES__APIProviderRequestConfig<M>): Promise<A_PRODUCTS_SERVER_COMMANDS_TYPES__WidgetCreateResponse>;
    /**
    * This function is used to create organization
    *
    * @param organization
    * @returns
    */
    update<M = any>(request: A_PRODUCTS_SERVER_COMMANDS_TYPES__WidgetUpdateRequest, config?: A_AUTH_TYPES__APIProviderRequestConfig<M>): Promise<A_PRODUCTS_SERVER_COMMANDS_TYPES__WidgetUpdateResponse>;
    /**
    *
    * This function is used to delete widget
    *
    * @param request
    * @param config
    * @returns
    */
    remove<M = any>(request: A_PRODUCTS_SERVER_COMMANDS_TYPES__WidgetDeleteRequest, config?: A_AUTH_TYPES__APIProviderRequestConfig<M>): Promise<A_PRODUCTS_SERVER_COMMANDS_TYPES__WidgetDeleteResponse>;
    /**
     *  This function is used to migrate widgets during the build process of application
     *
     * @param request
     * @param config
     * @returns
     */
    migrate<M = any>(request: A_PRODUCTS_SERVER_COMMANDS_TYPES__WidgetMigrateRequest, config?: A_AUTH_TYPES__APIProviderRequestConfig<M>): Promise<A_PRODUCTS_SERVER_COMMANDS_TYPES__WidgetMigrateResponse>;
}
