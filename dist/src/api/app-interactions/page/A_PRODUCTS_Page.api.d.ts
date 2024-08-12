import { A_AUTH_AppInteractions_APIProvider } from "@adaas/a-auth";
import { A_PRODUCTS_ContextClass } from "../../../global/A_PRODUCTS_Context.class";
import { A_PRODUCTS_APP_INTERACTIONS_TYPES__PageCreateRequest, A_PRODUCTS_APP_INTERACTIONS_TYPES__PageCreateResponse, A_PRODUCTS_APP_INTERACTIONS_TYPES__PageGetRequest, A_PRODUCTS_APP_INTERACTIONS_TYPES__PageGetResponse, A_PRODUCTS_APP_INTERACTIONS_TYPES__PageListRequest, A_PRODUCTS_APP_INTERACTIONS_TYPES__PageListResponse, A_PRODUCTS_APP_INTERACTIONS_TYPES__PageUpdateRequest, A_PRODUCTS_APP_INTERACTIONS_TYPES__PageUpdateResponse } from "./A_PRODUCTS_Page.types";
/**
 * API Provider for Pages
 */
export declare class A_PRODUCTS_APP_INTERACTIONS__PageAPI extends A_AUTH_AppInteractions_APIProvider<A_PRODUCTS_ContextClass> {
    protected get baseURL(): string;
    /**
     * Returns list of pages based on User Access
     *
     * @param request
     * @param meta
     * @returns
     */
    list<M = any>(request: A_PRODUCTS_APP_INTERACTIONS_TYPES__PageListRequest, 
    /**
     * The meta object to pass through API call for error handling or response handling
     */
    meta?: M): Promise<A_PRODUCTS_APP_INTERACTIONS_TYPES__PageListResponse>;
    /**
     * API returns organization with nested entities such as profile, settings, etc.
     *
     * @param request
     * @param meta
     * @returns
     */
    load<M = any>(request: A_PRODUCTS_APP_INTERACTIONS_TYPES__PageGetRequest, 
    /**
     * The meta object to pass through API call for error handling or response handling
     */
    meta?: M): Promise<A_PRODUCTS_APP_INTERACTIONS_TYPES__PageGetResponse>;
    /**
     *  API creates organization with required dependencies
     *
     * @param request
     * @param meta
     * @returns
     */
    create<M = any>(request: A_PRODUCTS_APP_INTERACTIONS_TYPES__PageCreateRequest, 
    /**
     * The meta object to pass through API call for error handling or response handling
     */
    meta?: M): Promise<A_PRODUCTS_APP_INTERACTIONS_TYPES__PageCreateResponse>;
    /**
    * This function is used to create organization
    *
    * @param organization
    * @returns
    */
    update<M = any>(request: A_PRODUCTS_APP_INTERACTIONS_TYPES__PageUpdateRequest, 
    /**
     * The meta object to pass through API call for error handling or response handling
     */
    meta?: M): Promise<A_PRODUCTS_APP_INTERACTIONS_TYPES__PageUpdateResponse>;
}
