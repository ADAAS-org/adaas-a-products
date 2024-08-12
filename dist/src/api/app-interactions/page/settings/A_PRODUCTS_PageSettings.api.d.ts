import { A_AUTH_AppInteractions_APIProvider } from "@adaas/a-auth";
import { A_PRODUCTS_ContextClass } from "../../../../global/A_PRODUCTS_Context.class";
import { A_PRODUCTS_APP_INTERACTIONS_TYPES__PageSettingsGetRequest, A_PRODUCTS_APP_INTERACTIONS_TYPES__PageSettingsUpdateRequest } from "./A_PRODUCTS_PageSettings.types";
export declare class A_PRODUCTS_APP_INTERACTIONS__PageSettingsAPI extends A_AUTH_AppInteractions_APIProvider<A_PRODUCTS_ContextClass> {
    protected get baseURL(): string;
    /**
     *
     * This function is used to get page settings
     *
     * @param orgASEID
     * @returns
     */
    load<M = any>(request: A_PRODUCTS_APP_INTERACTIONS_TYPES__PageSettingsGetRequest, 
    /**
     * The meta object to pass through API call for error handling or response handling
     */
    meta?: M): Promise<Partial<import("./A_PRODUCTS_PageSettings.types").A_PRODUCTS_TYPES__PageSettings_APIEntity>>;
    /**
     *  This function is used to update page settings
     *
     * @param request
     * @param meta
     * @returns
     */
    update<M = any>(request: A_PRODUCTS_APP_INTERACTIONS_TYPES__PageSettingsUpdateRequest, 
    /**
     * The meta object to pass through API call for error handling or response handling
     */
    meta?: M): Promise<Partial<import("./A_PRODUCTS_PageSettings.types").A_PRODUCTS_TYPES__PageSettings_APIEntity>>;
}
