import { A_AUTH_AppInteractions_APIProvider } from "@adaas/a-auth";
import { A_PRODUCTS_ContextClass } from "@adaas/a-sdk/global/A_PRODUCTS_Context.class";
import {
    A_PRODUCTS_APP_INTERACTIONS_TYPES__PageSettingsGetRequest,
    A_PRODUCTS_APP_INTERACTIONS_TYPES__PageSettingsGetResponse,
    A_PRODUCTS_APP_INTERACTIONS_TYPES__PageSettingsUpdateRequest,
    A_PRODUCTS_APP_INTERACTIONS_TYPES__PageSettingsUpdateResponse
} from "./A_PRODUCTS_PageSettings.types";


export class A_PRODUCTS_APP_INTERACTIONS__PageSettingsAPI extends A_AUTH_AppInteractions_APIProvider<A_PRODUCTS_ContextClass> {

    protected get baseURL(): string {
        return this.context.getConfigurationProperty('API_LOCATION');
    }

    /**
     * 
     * This function is used to get page settings
     * 
     * @param orgASEID 
     * @returns 
     */
    async load<M = any>(
        request: A_PRODUCTS_APP_INTERACTIONS_TYPES__PageSettingsGetRequest,
        /**
         * The meta object to pass through API call for error handling or response handling
         */
        meta?: M
    ) {
        return await this
            .get<A_PRODUCTS_APP_INTERACTIONS_TYPES__PageSettingsGetResponse, M>(
                `/pages/${request.aseid}/settings`,
                {},
                {
                    meta
                }
            );
    }


    /**
     *  This function is used to update page settings
     * 
     * @param request 
     * @param meta 
     * @returns 
     */
    async update<M = any>(
        request: A_PRODUCTS_APP_INTERACTIONS_TYPES__PageSettingsUpdateRequest,
        /**
         * The meta object to pass through API call for error handling or response handling
         */
        meta?: M
    ) {
        return await this
            .put<A_PRODUCTS_APP_INTERACTIONS_TYPES__PageSettingsUpdateResponse, M>(
                `/pages/${request.aseid}/settings`,
                request.settings,
                {
                    meta
                }
            );
    }
}

