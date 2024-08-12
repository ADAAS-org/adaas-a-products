import { A_AUTH_AppInteractions_APIProvider } from "@adaas/a-auth";
import { A_PRODUCTS_ContextClass } from "@adaas/a-sdk/global/A_PRODUCTS_Context.class";
import {
    A_PRODUCTS_APP_INTERACTIONS_TYPES__AppWidgetsListRequest,
    A_PRODUCTS_APP_INTERACTIONS_TYPES__AppWidgetsListResponse
} from "./A_PRODUCTS_AppWidget.types";


export class A_PRODUCTS_APP_INTERACTIONS__AppWidgetAPI extends A_AUTH_AppInteractions_APIProvider<A_PRODUCTS_ContextClass> {

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
    async list<M = any>(
        request: A_PRODUCTS_APP_INTERACTIONS_TYPES__AppWidgetsListRequest,
        /**
         * The meta object to pass through API call for error handling or response handling
         */
        meta?: M
    ) {
        return await this
            .get<A_PRODUCTS_APP_INTERACTIONS_TYPES__AppWidgetsListResponse, M>(
                `/apps/${request.aseid}/pages`,
                {
                    ...request.pagination,
                    ...request.filter
                },
                {
                    meta
                }
            );
    }
}

