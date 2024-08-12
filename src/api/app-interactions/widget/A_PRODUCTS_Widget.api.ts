import { A_AUTH_AppInteractions_APIProvider } from "@adaas/a-auth";
import { A_PRODUCTS_ContextClass } from "@adaas/a-sdk/global/A_PRODUCTS_Context.class";
import {
    A_PRODUCTS_APP_INTERACTIONS_TYPES__WidgetCreateRequest,
    A_PRODUCTS_APP_INTERACTIONS_TYPES__WidgetCreateResponse,
    A_PRODUCTS_APP_INTERACTIONS_TYPES__WidgetGetRequest,
    A_PRODUCTS_APP_INTERACTIONS_TYPES__WidgetGetResponse,
    A_PRODUCTS_APP_INTERACTIONS_TYPES__WidgetListRequest,
    A_PRODUCTS_APP_INTERACTIONS_TYPES__WidgetListResponse,
    A_PRODUCTS_APP_INTERACTIONS_TYPES__WidgetUpdateRequest,
    A_PRODUCTS_APP_INTERACTIONS_TYPES__WidgetUpdateResponse
} from "./A_PRODUCTS_Widget.types";


/**
 * API Provider for Widgets
 */
export class A_PRODUCTS_APP_INTERACTIONS__WidgetAPI extends A_AUTH_AppInteractions_APIProvider<A_PRODUCTS_ContextClass> {

    protected get baseURL(): string {
        return this.context.getConfigurationProperty('API_LOCATION');
    }


    /**
     * Returns list of widgets based on User Access
     * 
     * @param request 
     * @param meta 
     * @returns 
     */
    async list<M = any>(
        request: A_PRODUCTS_APP_INTERACTIONS_TYPES__WidgetListRequest,
        /**
         * The meta object to pass through API call for error handling or response handling
         */
        meta?: M
    ) {
        return await this
            .get<A_PRODUCTS_APP_INTERACTIONS_TYPES__WidgetListResponse, M>(
                '/widgets',
                {
                    ...request.pagination,
                    ...request.filter
                },
                {
                    meta
                }
            );
    }

    /**
     * API returns organization with nested entities such as profile, settings, etc.
     * 
     * @param request 
     * @param meta 
     * @returns 
     */
    async load<M = any>(
        request: A_PRODUCTS_APP_INTERACTIONS_TYPES__WidgetGetRequest,
        /**
         * The meta object to pass through API call for error handling or response handling
         */
        meta?: M
    ) {
        return await this
            .get<A_PRODUCTS_APP_INTERACTIONS_TYPES__WidgetGetResponse, M>(
                `/widgets/${request.aseid}`,
                {},
                {
                    meta
                }
            );
    }


    /**
     *  API creates organization with required dependencies
     * 
     * @param request 
     * @param meta 
     * @returns 
     */
    async create<M = any>(
        request: A_PRODUCTS_APP_INTERACTIONS_TYPES__WidgetCreateRequest,
        /**
         * The meta object to pass through API call for error handling or response handling
         */
        meta?: M
    ) {
        return await this
            .post<A_PRODUCTS_APP_INTERACTIONS_TYPES__WidgetCreateResponse, M>(
                `/widgets`,
                request,
                {
                    meta
                }
            );
    }


    /**
    * This function is used to create organization
    * 
    * @param organization 
    * @returns 
    */
    async update<M = any>(
        request: A_PRODUCTS_APP_INTERACTIONS_TYPES__WidgetUpdateRequest,
        /**
         * The meta object to pass through API call for error handling or response handling
         */
        meta?: M
    ) {
        return await this
            .post<A_PRODUCTS_APP_INTERACTIONS_TYPES__WidgetUpdateResponse, M>(
                `/widgets/${request.aseid}`,
                request,
                {
                    meta
                }
            );
    }
}

