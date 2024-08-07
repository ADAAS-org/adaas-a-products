import { A_AUTH_AppInteractions_APIProvider } from "@adaas/a-auth";
import { A_PRODUCTS_ContextClass } from "@adaas/a-sdk/global/A_PRODUCTS_Context.class";
import {
    A_PRODUCTS_APP_INTERACTIONS_TYPES__AppSettingsGetRequest,
    A_PRODUCTS_APP_INTERACTIONS_TYPES__AppSettingsGetResponse,
    A_PRODUCTS_APP_INTERACTIONS_TYPES__AppSettingsUpdateRequest,
    A_PRODUCTS_APP_INTERACTIONS_TYPES__AppSettingsUpdateResponse
} from "./A_PRODUCTS_AppSettings.types";


export class A_PRODUCTS_APP_INTERACTIONS__AppSettingsAPI extends A_AUTH_AppInteractions_APIProvider<A_PRODUCTS_ContextClass> {

    protected get baseURL(): string {
        return this.context.getConfigurationProperty('API_LOCATION');
    }

    /**
     * 
     * This function is used to get app settings
     * 
     * @param orgASEID 
     * @returns 
     */
    async load<M = any>(
        request: A_PRODUCTS_APP_INTERACTIONS_TYPES__AppSettingsGetRequest,
        /**
         * The meta object to pass through API call for error handling or response handling
         */
        meta?: M
    ) {
        return await this
            .get<A_PRODUCTS_APP_INTERACTIONS_TYPES__AppSettingsGetResponse, M>(
                `/apps/${request.asied}/settings`,
                {},
                {
                    meta
                }
            );
    }


    /**
     *  This function is used to update app settings
     * 
     * @param request 
     * @param meta 
     * @returns 
     */
    async update<M = any>(
        request: A_PRODUCTS_APP_INTERACTIONS_TYPES__AppSettingsUpdateRequest,
        /**
         * The meta object to pass through API call for error handling or response handling
         */
        meta?: M
    ) {
        return await this
            .put<A_PRODUCTS_APP_INTERACTIONS_TYPES__AppSettingsUpdateResponse, M>(
                `/apps/${request.asied}/settings`,
                request.settings,
                {
                    meta
                }
            );
    }
}

