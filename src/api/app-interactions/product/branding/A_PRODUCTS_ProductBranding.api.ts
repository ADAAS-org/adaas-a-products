import { A_AUTH_AppInteractions_APIProvider } from "@adaas/a-auth";
import { A_PRODUCTS_ContextClass } from "@adaas/a-sdk/global/A_PRODUCTS_Context.class";
import {
    A_PRODUCTS_APP_INTERACTIONS_TYPES__ProductBrandingGetRequest,
    A_PRODUCTS_APP_INTERACTIONS_TYPES__ProductBrandingGetResponse,
    A_PRODUCTS_APP_INTERACTIONS_TYPES__ProductBrandingUpdateRequest,
    A_PRODUCTS_APP_INTERACTIONS_TYPES__ProductBrandingUpdateResponse
} from "./A_PRODUCTS_ProductBranding.types";


export class A_PRODUCTS_APP_INTERACTIONS__ProductBrandingAPI extends A_AUTH_AppInteractions_APIProvider<A_PRODUCTS_ContextClass> {

    protected get baseURL(): string {
        return this.context.getConfigurationProperty('API_LOCATION');
    }

    /**
     * 
     * This function is used to get product branding
     * 
     */
    async load<M = any>(
        request: A_PRODUCTS_APP_INTERACTIONS_TYPES__ProductBrandingGetRequest,
        /**
         * The meta object to pass through API call for error handling or response handling
         */
        meta?: M
    ) {
        return await this
            .get<A_PRODUCTS_APP_INTERACTIONS_TYPES__ProductBrandingGetResponse, M>(
                `/products/${request.aseid}/branding`,
                {},
                {
                    meta
                }
            );
    }


    /**
     *  This function is used to update product branding
     * 
     * @param request 
     * @param meta 
     * @returns 
     */
    async update<M = any>(
        request: A_PRODUCTS_APP_INTERACTIONS_TYPES__ProductBrandingUpdateRequest,
        /**
         * The meta object to pass through API call for error handling or response handling
         */
        meta?: M
    ) {
        return await this
            .put<A_PRODUCTS_APP_INTERACTIONS_TYPES__ProductBrandingUpdateResponse, M>(
                `/products/${request.aseid}/branding`,
                request.branding,
                {
                    meta
                }
            );
    }
}

