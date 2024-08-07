import { A_AUTH_AppInteractions_APIProvider, A_AUTH_TYPES__APIProviderRequestConfig } from "@adaas/a-auth";
import { A_PRODUCTS_ContextClass } from "@adaas/a-sdk/global/A_PRODUCTS_Context.class";
import {
    A_PRODUCTS_SERVER_COMMANDS_TYPES__AppCreateRequest,
    A_PRODUCTS_SERVER_COMMANDS_TYPES__AppCreateResponse,
    A_PRODUCTS_SERVER_COMMANDS_TYPES__AppGetRequest,
    A_PRODUCTS_SERVER_COMMANDS_TYPES__AppGetResponse,
    A_PRODUCTS_SERVER_COMMANDS_TYPES__AppListRequest,
    A_PRODUCTS_SERVER_COMMANDS_TYPES__AppListResponse,
    A_PRODUCTS_SERVER_COMMANDS_TYPES__AppUpdateRequest,
    A_PRODUCTS_SERVER_COMMANDS_TYPES__AppUpdateResponse
} from "./A_PRODUCTS_App.types";


/**
 * API Provider for Apps
 */
export class A_PRODUCTS_SERVER_COMMANDS__AppAPI extends A_AUTH_AppInteractions_APIProvider<A_PRODUCTS_ContextClass> {

    protected get baseURL(): string {
        return this.context.getConfigurationProperty('API_LOCATION');
    }


    /**
     * Returns list of apps based on User Access
     * 
     * @param request 
     * @param meta 
     * @returns 
     */
    async list<M = any>(
        request: A_PRODUCTS_SERVER_COMMANDS_TYPES__AppListRequest,
        config?: A_AUTH_TYPES__APIProviderRequestConfig<M>
    ) {
        return await this
            .get<A_PRODUCTS_SERVER_COMMANDS_TYPES__AppListResponse, M>(
                '/apps',
                {
                    ...request.pagination,
                    ...request.filter
                },
                config
            );
    }

    /**
     * API returns app with nested entities such as profile, settings, etc.
     * 
     * @param request 
     * @param meta 
     * @returns 
     */
    async load<M = any>(
        request: A_PRODUCTS_SERVER_COMMANDS_TYPES__AppGetRequest,
        config?: A_AUTH_TYPES__APIProviderRequestConfig<M>
    ) {
        return await this
            .get<A_PRODUCTS_SERVER_COMMANDS_TYPES__AppGetResponse, M>(
                `/apps/${request.aseid}`,
                {},
                config
            );
    }


    /**
     *  API creates app with required dependencies
     * 
     * @param request 
     * @param meta 
     * @returns 
     */
    async create<M = any>(
        request: A_PRODUCTS_SERVER_COMMANDS_TYPES__AppCreateRequest,
        config?: A_AUTH_TYPES__APIProviderRequestConfig<M>
    ) {
        return await this
            .post<A_PRODUCTS_SERVER_COMMANDS_TYPES__AppCreateResponse, M>(
                `/apps`,
                request,
                config
            );
    }


    /**
    * This function is used to create app
    * 
    * @param app 
    * @returns 
    */
    async update<M = any>(
        request: A_PRODUCTS_SERVER_COMMANDS_TYPES__AppUpdateRequest,
        config?: A_AUTH_TYPES__APIProviderRequestConfig<M>
    ) {
        return await this
            .post<A_PRODUCTS_SERVER_COMMANDS_TYPES__AppUpdateResponse, M>(
                `/apps/${request.aseid}`,
                request,
                config
            );
    }
}

