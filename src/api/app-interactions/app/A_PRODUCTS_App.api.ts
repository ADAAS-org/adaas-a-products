import { A_AUTH_AppInteractions_APIProvider } from "@adaas/a-auth";
import { A_PRODUCTS_ContextClass } from "@adaas/a-sdk/global/A_PRODUCTS_Context.class";
import {
    A_PRODUCTS_APP_INTERACTIONS_TYPES__AppCreateRequest,
    A_PRODUCTS_APP_INTERACTIONS_TYPES__AppCreateResponse,
    A_PRODUCTS_APP_INTERACTIONS_TYPES__AppGetRequest,
    A_PRODUCTS_APP_INTERACTIONS_TYPES__AppGetResponse,
    A_PRODUCTS_APP_INTERACTIONS_TYPES__AppListRequest,
    A_PRODUCTS_APP_INTERACTIONS_TYPES__AppListResponse,
    A_PRODUCTS_APP_INTERACTIONS_TYPES__AppUpdateRequest,
    A_PRODUCTS_APP_INTERACTIONS_TYPES__AppUpdateResponse
} from "./A_PRODUCTS_App.types";


/**
 * API Provider for Apps
 */
export class A_PRODUCTS_APP_INTERACTIONS__AppAPI extends A_AUTH_AppInteractions_APIProvider<A_PRODUCTS_ContextClass> {

    protected get baseURL(): string {
        return this.context.getConfigurationProperty('API_LOCATION');
    }


    /**
     * Returns list of organizations based on User Access
     * 
     * @param request 
     * @param meta 
     * @returns 
     */
    async list<M = any>(
        request: A_PRODUCTS_APP_INTERACTIONS_TYPES__AppListRequest,
        /**
         * The meta object to pass through API call for error handling or response handling
         */
        meta?: M
    ) {
        return await this
            .get<A_PRODUCTS_APP_INTERACTIONS_TYPES__AppListResponse, M>(
                '/organizations',
                request,
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
        request: A_PRODUCTS_APP_INTERACTIONS_TYPES__AppGetRequest,
        /**
         * The meta object to pass through API call for error handling or response handling
         */
        meta?: M
    ) {
        return await this
            .get<A_PRODUCTS_APP_INTERACTIONS_TYPES__AppGetResponse, M>(
                `/organizations/${request.orgASEID}`,
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
        request: A_PRODUCTS_APP_INTERACTIONS_TYPES__AppCreateRequest,
        /**
         * The meta object to pass through API call for error handling or response handling
         */
        meta?: M
    ) {
        return await this
            .post<A_PRODUCTS_APP_INTERACTIONS_TYPES__AppCreateResponse, M>(
                `/organizations`,
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
        request: A_PRODUCTS_APP_INTERACTIONS_TYPES__AppUpdateRequest,
        /**
         * The meta object to pass through API call for error handling or response handling
         */
        meta?: M
    ) {
        return await this
            .post<A_PRODUCTS_APP_INTERACTIONS_TYPES__AppUpdateResponse, M>(
                `/organizations/${request.aseid}`,
                request,
                {
                    meta
                }
            );
    }
}

