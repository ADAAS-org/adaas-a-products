import { A_AUTH_AppInteractions_APIProvider } from "@adaas/a-auth";
import { A_PRODUCTS_ContextClass } from "../../../../global/A_PRODUCTS_Context.class";
import { A_PRODUCTS_APP_INTERACTIONS_TYPES__ProductBrandingGetRequest, A_PRODUCTS_APP_INTERACTIONS_TYPES__ProductBrandingUpdateRequest } from "./A_PRODUCTS_ProductBranding.types";
export declare class A_PRODUCTS_APP_INTERACTIONS__ProductBrandingAPI extends A_AUTH_AppInteractions_APIProvider<A_PRODUCTS_ContextClass> {
    protected get baseURL(): string;
    /**
     *
     * This function is used to get product branding
     *
     */
    load<M = any>(request: A_PRODUCTS_APP_INTERACTIONS_TYPES__ProductBrandingGetRequest, 
    /**
     * The meta object to pass through API call for error handling or response handling
     */
    meta?: M): Promise<Partial<import("./A_PRODUCTS_ProductBranding.types").A_PRODUCTS_TYPES__ProductBranding_APIEntity>>;
    /**
     *  This function is used to update product branding
     *
     * @param request
     * @param meta
     * @returns
     */
    update<M = any>(request: A_PRODUCTS_APP_INTERACTIONS_TYPES__ProductBrandingUpdateRequest, 
    /**
     * The meta object to pass through API call for error handling or response handling
     */
    meta?: M): Promise<Partial<import("./A_PRODUCTS_ProductBranding.types").A_PRODUCTS_TYPES__ProductBranding_APIEntity>>;
}
