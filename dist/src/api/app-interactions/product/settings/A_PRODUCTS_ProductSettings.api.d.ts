import { A_AUTH_AppInteractions_APIProvider } from "@adaas/a-auth";
import { A_PRODUCTS_ContextClass } from "../../../../global/A_PRODUCTS_Context.class";
import { A_PRODUCTS_APP_INTERACTIONS_TYPES__ProductSettingsGetRequest, A_PRODUCTS_APP_INTERACTIONS_TYPES__ProductSettingsUpdateRequest } from "./A_PRODUCTS_ProductSettings.types";
export declare class A_PRODUCTS_APP_INTERACTIONS__ProductSettingsAPI extends A_AUTH_AppInteractions_APIProvider<A_PRODUCTS_ContextClass> {
    protected get baseURL(): string;
    /**
     *
     * This function is used to get product settings
     *
     * @param orgASEID
     * @returns
     */
    load<M = any>(request: A_PRODUCTS_APP_INTERACTIONS_TYPES__ProductSettingsGetRequest, 
    /**
     * The meta object to pass through API call for error handling or response handling
     */
    meta?: M): Promise<Partial<import("./A_PRODUCTS_ProductSettings.types").A_PRODUCTS_TYPES__ProductSettings_APIEntity>>;
    /**
     *  This function is used to update product settings
     *
     * @param request
     * @param meta
     * @returns
     */
    update<M = any>(request: A_PRODUCTS_APP_INTERACTIONS_TYPES__ProductSettingsUpdateRequest, 
    /**
     * The meta object to pass through API call for error handling or response handling
     */
    meta?: M): Promise<Partial<import("./A_PRODUCTS_ProductSettings.types").A_PRODUCTS_TYPES__ProductSettings_APIEntity>>;
}
