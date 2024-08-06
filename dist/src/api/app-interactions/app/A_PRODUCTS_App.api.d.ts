import { A_AUTH_AppInteractions_APIProvider } from "@adaas/a-auth";
import { A_PRODUCTS_ContextClass } from "../../../global/A_PRODUCTS_Context.class";
import { A_PRODUCTS_APP_INTERACTIONS_TYPES__AppCreateRequest, A_PRODUCTS_APP_INTERACTIONS_TYPES__AppCreateResponse, A_PRODUCTS_APP_INTERACTIONS_TYPES__AppGetRequest, A_PRODUCTS_APP_INTERACTIONS_TYPES__AppGetResponse, A_PRODUCTS_APP_INTERACTIONS_TYPES__AppListRequest, A_PRODUCTS_APP_INTERACTIONS_TYPES__AppListResponse, A_PRODUCTS_APP_INTERACTIONS_TYPES__AppUpdateRequest, A_PRODUCTS_APP_INTERACTIONS_TYPES__AppUpdateResponse } from "./A_PRODUCTS_App.types";
/**
 * API Provider for Apps
 */
export declare class A_PRODUCTS_APP_INTERACTIONS__AppAPI extends A_AUTH_AppInteractions_APIProvider<A_PRODUCTS_ContextClass> {
    protected get baseURL(): string;
    /**
     * Returns list of organizations based on User Access
     *
     * @param request
     * @param meta
     * @returns
     */
    list<M = any>(request: A_PRODUCTS_APP_INTERACTIONS_TYPES__AppListRequest, 
    /**
     * The meta object to pass through API call for error handling or response handling
     */
    meta?: M): Promise<A_PRODUCTS_APP_INTERACTIONS_TYPES__AppListResponse>;
    /**
     * API returns organization with nested entities such as profile, settings, etc.
     *
     * @param request
     * @param meta
     * @returns
     */
    load<M = any>(request: A_PRODUCTS_APP_INTERACTIONS_TYPES__AppGetRequest, 
    /**
     * The meta object to pass through API call for error handling or response handling
     */
    meta?: M): Promise<A_PRODUCTS_APP_INTERACTIONS_TYPES__AppGetResponse>;
    /**
     *  API creates organization with required dependencies
     *
     * @param request
     * @param meta
     * @returns
     */
    create<M = any>(request: A_PRODUCTS_APP_INTERACTIONS_TYPES__AppCreateRequest, 
    /**
     * The meta object to pass through API call for error handling or response handling
     */
    meta?: M): Promise<A_PRODUCTS_APP_INTERACTIONS_TYPES__AppCreateResponse>;
    /**
    * This function is used to create organization
    *
    * @param organization
    * @returns
    */
    update<M = any>(request: A_PRODUCTS_APP_INTERACTIONS_TYPES__AppUpdateRequest, 
    /**
     * The meta object to pass through API call for error handling or response handling
     */
    meta?: M): Promise<A_PRODUCTS_APP_INTERACTIONS_TYPES__AppUpdateResponse>;
}
