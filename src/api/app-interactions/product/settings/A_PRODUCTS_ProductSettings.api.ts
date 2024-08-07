import { A_AUTH_AppInteractions_APIProvider } from "@adaas/a-auth";
import { A_PRODUCTS_ContextClass } from "@adaas/a-sdk/global/A_PRODUCTS_Context.class";
import {
    A_PRODUCTS_APP_INTERACTIONS_TYPES__ProductSettingsGetRequest,
    A_PRODUCTS_APP_INTERACTIONS_TYPES__ProductSettingsGetResponse,
    A_PRODUCTS_APP_INTERACTIONS_TYPES__ProductSettingsUpdateRequest,
    A_PRODUCTS_APP_INTERACTIONS_TYPES__ProductSettingsUpdateResponse
} from "./A_PRODUCTS_ProductSettings.types";


export class A_PRODUCTS_APP_INTERACTIONS__ProductSettingsAPI extends A_AUTH_AppInteractions_APIProvider<A_PRODUCTS_ContextClass> {

    protected get baseURL(): string {
        return this.context.getConfigurationProperty('API_LOCATION');
    }

    /**
     * 
     * This function is used to get product settings
     * 
     * @param orgASEID 
     * @returns 
     */
    async load<M = any>(
        request: A_PRODUCTS_APP_INTERACTIONS_TYPES__ProductSettingsGetRequest,
        /**
         * The meta object to pass through API call for error handling or response handling
         */
        meta?: M
    ) {
        return await this
            .get<A_PRODUCTS_APP_INTERACTIONS_TYPES__ProductSettingsGetResponse, M>(
                `/products/${request.aseid}/settings`,
                {},
                {
                    meta
                }
            );
    }


    /**
     *  This function is used to update product settings
     * 
     * @param request 
     * @param meta 
     * @returns 
     */
    async update<M = any>(
        request: A_PRODUCTS_APP_INTERACTIONS_TYPES__ProductSettingsUpdateRequest,
        /**
         * The meta object to pass through API call for error handling or response handling
         */
        meta?: M
    ) {
        return await this
            .put<A_PRODUCTS_APP_INTERACTIONS_TYPES__ProductSettingsUpdateResponse, M>(
                `/products/${request.aseid}/settings`,
                request.settings,
                {
                    meta
                }
            );
    }
}

