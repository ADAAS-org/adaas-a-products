import { A_AUTH_AppInteractions_APIProvider } from "@adaas/a-auth";
import { A_PRODUCTS_ContextClass } from "../../../../global/A_PRODUCTS_Context.class";
import { A_PRODUCTS_APP_INTERACTIONS_TYPES__AppSettingsGetRequest, A_PRODUCTS_APP_INTERACTIONS_TYPES__AppSettingsUpdateRequest } from "./A_PRODUCTS_AppSettings.types";
export declare class A_PRODUCTS_APP_INTERACTIONS__AppSettingsAPI extends A_AUTH_AppInteractions_APIProvider<A_PRODUCTS_ContextClass> {
    protected get baseURL(): string;
    /**
     *
     * This function is used to get organization settings
     *
     * @param orgASEID
     * @returns
     */
    load<M = any>(request: A_PRODUCTS_APP_INTERACTIONS_TYPES__AppSettingsGetRequest, 
    /**
     * The meta object to pass through API call for error handling or response handling
     */
    meta?: M): Promise<Partial<import("./A_PRODUCTS_AppSettings.types").A_PRODUCTS_TYPES__AppSettings_APIEntity>>;
    /**
     *  This function is used to update organization settings
     *
     * @param request
     * @param meta
     * @returns
     */
    update<M = any>(request: A_PRODUCTS_APP_INTERACTIONS_TYPES__AppSettingsUpdateRequest, 
    /**
     * The meta object to pass through API call for error handling or response handling
     */
    meta?: M): Promise<Partial<import("./A_PRODUCTS_AppSettings.types").A_PRODUCTS_TYPES__AppSettings_APIEntity>>;
}
