import { A_AUTH_AppInteractions_APIProvider } from "@adaas/a-auth";
import { A_PRODUCTS_ContextClass } from "@adaas/a-sdk/global/A_PRODUCTS_Context.class";
import {
    A_PRODUCTS_APP_INTERACTIONS_TYPES__WidgetSettingsGetRequest,
    A_PRODUCTS_APP_INTERACTIONS_TYPES__WidgetSettingsGetResponse,
    A_PRODUCTS_APP_INTERACTIONS_TYPES__WidgetSettingsUpdateRequest,
    A_PRODUCTS_APP_INTERACTIONS_TYPES__WidgetSettingsUpdateResponse
} from "./A_PRODUCTS_WidgetSettings.types";


export class A_PRODUCTS_APP_INTERACTIONS__WidgetSettingsAPI extends A_AUTH_AppInteractions_APIProvider<A_PRODUCTS_ContextClass> {

    protected get baseURL(): string {
        return this.context.getConfigurationProperty('API_LOCATION');
    }

    /**
     * 
     * This function is used to get widget settings
     * 
     * @param orgASEID 
     * @returns 
     */
    async load<M = any>(
        request: A_PRODUCTS_APP_INTERACTIONS_TYPES__WidgetSettingsGetRequest,
        /**
         * The meta object to pass through API call for error handling or response handling
         */
        meta?: M
    ) {
        return await this
            .get<A_PRODUCTS_APP_INTERACTIONS_TYPES__WidgetSettingsGetResponse, M>(
                `/widgets/${request.aseid}/settings`,
                {},
                {
                    meta
                }
            );
    }


    /**
     *  This function is used to update widget settings
     * 
     * @param request 
     * @param meta 
     * @returns 
     */
    async update<M = any>(
        request: A_PRODUCTS_APP_INTERACTIONS_TYPES__WidgetSettingsUpdateRequest,
        /**
         * The meta object to pass through API call for error handling or response handling
         */
        meta?: M
    ) {
        return await this
            .put<A_PRODUCTS_APP_INTERACTIONS_TYPES__WidgetSettingsUpdateResponse, M>(
                `/widgets/${request.aseid}/settings`,
                request.settings,
                {
                    meta
                }
            );
    }
}

