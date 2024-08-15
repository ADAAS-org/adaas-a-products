import { A_AUTH_ServerCommands_APIProvider, A_AUTH_TYPES__APIProviderRequestConfig } from "@adaas/a-auth";
import { A_PRODUCTS_ContextClass } from "@adaas/a-sdk/global/A_PRODUCTS_Context.class";
import {
    A_PRODUCTS_SERVER_COMMANDS_TYPES__WidgetCreateRequest,
    A_PRODUCTS_SERVER_COMMANDS_TYPES__WidgetCreateResponse,
    A_PRODUCTS_SERVER_COMMANDS_TYPES__WidgetDeleteRequest,
    A_PRODUCTS_SERVER_COMMANDS_TYPES__WidgetDeleteResponse,
    A_PRODUCTS_SERVER_COMMANDS_TYPES__WidgetGetRequest,
    A_PRODUCTS_SERVER_COMMANDS_TYPES__WidgetGetResponse,
    A_PRODUCTS_SERVER_COMMANDS_TYPES__WidgetListRequest,
    A_PRODUCTS_SERVER_COMMANDS_TYPES__WidgetListResponse,
    A_PRODUCTS_SERVER_COMMANDS_TYPES__WidgetMigrateRequest,
    A_PRODUCTS_SERVER_COMMANDS_TYPES__WidgetMigrateResponse,
    A_PRODUCTS_SERVER_COMMANDS_TYPES__WidgetUpdateRequest,
    A_PRODUCTS_SERVER_COMMANDS_TYPES__WidgetUpdateResponse
} from "./A_PRODUCTS_Widget.types";


/**
 * API Provider for Widgets
 */
export class A_PRODUCTS_SERVER_COMMANDS__WidgetAPI extends A_AUTH_ServerCommands_APIProvider<A_PRODUCTS_ContextClass> {

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
        request: A_PRODUCTS_SERVER_COMMANDS_TYPES__WidgetListRequest,
        config?: A_AUTH_TYPES__APIProviderRequestConfig<M>
    ) {
        return await this
            .get<A_PRODUCTS_SERVER_COMMANDS_TYPES__WidgetListResponse, M>(
                '/widgets',
                {
                    ...request.pagination,
                    ...request.filter
                },
                config
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
        request: A_PRODUCTS_SERVER_COMMANDS_TYPES__WidgetGetRequest,
        config?: A_AUTH_TYPES__APIProviderRequestConfig<M>

    ) {
        return await this
            .get<A_PRODUCTS_SERVER_COMMANDS_TYPES__WidgetGetResponse, M>(
                `/widgets/${request.aseid}`,
                {},
                config
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
        request: A_PRODUCTS_SERVER_COMMANDS_TYPES__WidgetCreateRequest,
        config?: A_AUTH_TYPES__APIProviderRequestConfig<M>
    ) {
        return await this
            .post<A_PRODUCTS_SERVER_COMMANDS_TYPES__WidgetCreateResponse, M>(
                `/widgets`,
                request,
                config
            );
    }



    /**
    * This function is used to create organization
    * 
    * @param organization 
    * @returns 
    */
    async update<M = any>(
        request: A_PRODUCTS_SERVER_COMMANDS_TYPES__WidgetUpdateRequest,
        config?: A_AUTH_TYPES__APIProviderRequestConfig<M>
    ) {
        return await this
            .post<A_PRODUCTS_SERVER_COMMANDS_TYPES__WidgetUpdateResponse, M>(
                `/widgets/${request.aseid}`,
                request,
                config
            );
    }



    /**
    * 
    * This function is used to delete widget
    * 
    * @param request 
    * @param config 
    * @returns 
    */
    async remove<M = any>(
        request: A_PRODUCTS_SERVER_COMMANDS_TYPES__WidgetDeleteRequest,
        config?: A_AUTH_TYPES__APIProviderRequestConfig<M>
    ) {
        return await this
            .delete<A_PRODUCTS_SERVER_COMMANDS_TYPES__WidgetDeleteResponse>(`/pages/${request.aseid}`, config);
    }



    /**
     *  This function is used to migrate widgets during the build process of application
     * 
     * @param request 
     * @param config 
     * @returns 
     */
    async migrate<M = any>(
        request: A_PRODUCTS_SERVER_COMMANDS_TYPES__WidgetMigrateRequest,
        config?: A_AUTH_TYPES__APIProviderRequestConfig<M>
    ) {
        return await this
            .post<A_PRODUCTS_SERVER_COMMANDS_TYPES__WidgetMigrateResponse, M>(
                `/pages/migrate`,
                request,
                config
            );
    }
}

