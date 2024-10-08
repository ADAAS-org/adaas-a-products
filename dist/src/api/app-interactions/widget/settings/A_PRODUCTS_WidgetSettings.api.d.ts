import { A_AUTH_AppInteractions_APIProvider } from "@adaas/a-auth";
import { A_PRODUCTS_ContextClass } from "../../../../global/A_PRODUCTS_Context.class";
import { A_PRODUCTS_APP_INTERACTIONS_TYPES__WidgetSettingsGetRequest, A_PRODUCTS_APP_INTERACTIONS_TYPES__WidgetSettingsUpdateRequest } from "./A_PRODUCTS_WidgetSettings.types";
export declare class A_PRODUCTS_APP_INTERACTIONS__WidgetSettingsAPI extends A_AUTH_AppInteractions_APIProvider<A_PRODUCTS_ContextClass> {
    protected get baseURL(): string;
    /**
     *
     * This function is used to get widget settings
     *
     * @param orgASEID
     * @returns
     */
    load<M = any>(request: A_PRODUCTS_APP_INTERACTIONS_TYPES__WidgetSettingsGetRequest, 
    /**
     * The meta object to pass through API call for error handling or response handling
     */
    meta?: M): Promise<Partial<import("./A_PRODUCTS_WidgetSettings.types").A_PRODUCTS_TYPES__WidgetSettings_APIEntity>>;
    /**
     *  This function is used to update widget settings
     *
     * @param request
     * @param meta
     * @returns
     */
    update<M = any>(request: A_PRODUCTS_APP_INTERACTIONS_TYPES__WidgetSettingsUpdateRequest, 
    /**
     * The meta object to pass through API call for error handling or response handling
     */
    meta?: M): Promise<Partial<import("./A_PRODUCTS_WidgetSettings.types").A_PRODUCTS_TYPES__WidgetSettings_APIEntity>>;
}
