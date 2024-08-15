import { A_AUTH_ServerCommands_APIProvider, A_AUTH_TYPES__APIProviderRequestConfig } from "@adaas/a-auth";
import { A_PRODUCTS_ContextClass } from "@adaas/a-sdk/global/A_PRODUCTS_Context.class";
import {
    A_PRODUCTS_SERVER_COMMANDS_TYPES__PageCreateRequest,
    A_PRODUCTS_SERVER_COMMANDS_TYPES__PageCreateResponse,
    A_PRODUCTS_SERVER_COMMANDS_TYPES__PageDeleteRequest,
    A_PRODUCTS_SERVER_COMMANDS_TYPES__PageDeleteResponse,
    A_PRODUCTS_SERVER_COMMANDS_TYPES__PageGetRequest,
    A_PRODUCTS_SERVER_COMMANDS_TYPES__PageGetResponse,
    A_PRODUCTS_SERVER_COMMANDS_TYPES__PageListRequest,
    A_PRODUCTS_SERVER_COMMANDS_TYPES__PageListResponse,
    A_PRODUCTS_SERVER_COMMANDS_TYPES__PageMigrateRequest,
    A_PRODUCTS_SERVER_COMMANDS_TYPES__PageMigrateResponse,
    A_PRODUCTS_SERVER_COMMANDS_TYPES__PageUpdateRequest,
    A_PRODUCTS_SERVER_COMMANDS_TYPES__PageUpdateResponse
} from "./A_PRODUCTS_Page.types";


/**
 * API Provider for Pages
 */
export class A_PRODUCTS_SERVER_COMMANDS__PageAPI extends A_AUTH_ServerCommands_APIProvider<A_PRODUCTS_ContextClass> {

    protected get baseURL(): string {
        return this.context.getConfigurationProperty('API_LOCATION');
    }


    /**
     * 
     * Returns list of pages based on App Access
     * 
     * @param request 
     * @param config 
     * @returns 
     */
    async list<M = any>(
        request: A_PRODUCTS_SERVER_COMMANDS_TYPES__PageListRequest,
        config?: A_AUTH_TYPES__APIProviderRequestConfig<M>
    ) {
        return await this
            .get<A_PRODUCTS_SERVER_COMMANDS_TYPES__PageListResponse, M>(
                '/pages',
                {
                    ...request.pagination,
                    ...request.filter
                },
                config
            );
    }



    /**
     * API returns page with nested entities such as profile, settings, etc.
     * 
     * @param request 
     * @param config 
     * @returns 
     */
    async load<M = any>(
        request: A_PRODUCTS_SERVER_COMMANDS_TYPES__PageGetRequest,
        config?: A_AUTH_TYPES__APIProviderRequestConfig<M>
    ) {
        return await this
            .get<A_PRODUCTS_SERVER_COMMANDS_TYPES__PageGetResponse, M>(
                `/pages/${request.aseid}`,
                {},
                config
            );
    }


    /**
     * 
     * This function is used to create page
     * 
     * @param request 
     * @param config 
     * @returns 
     */
    async create<M = any>(
        request: A_PRODUCTS_SERVER_COMMANDS_TYPES__PageCreateRequest,
        config?: A_AUTH_TYPES__APIProviderRequestConfig<M>
    ) {
        return await this
            .post<A_PRODUCTS_SERVER_COMMANDS_TYPES__PageCreateResponse, M>(
                `/pages`,
                request,
                config
            );
    }


    /**
     * 
     * This function is used to update page
     * 
     * @param request 
     * @param config 
     * @returns 
     */
    async update<M = any>(
        request: A_PRODUCTS_SERVER_COMMANDS_TYPES__PageUpdateRequest,
        config?: A_AUTH_TYPES__APIProviderRequestConfig<M>
    ) {
        return await this
            .post<A_PRODUCTS_SERVER_COMMANDS_TYPES__PageUpdateResponse, M>(
                `/pages/${request.aseid}`,
                request,
                config
            );
    }



    /**
     * 
     * This function is used to delete page
     * 
     * @param request 
     * @param config 
     * @returns 
     */
    async remove<M = any>(
        request: A_PRODUCTS_SERVER_COMMANDS_TYPES__PageDeleteRequest,
        config?: A_AUTH_TYPES__APIProviderRequestConfig<M>
    ) {
        return await this
            .delete<A_PRODUCTS_SERVER_COMMANDS_TYPES__PageDeleteResponse>(`/pages/${request.aseid}`, config);
    }


    /**
     *  This function is used to migrate pages during the build process of application
     * 
     * @param request 
     * @param config 
     * @returns 
     */
    async migrate<M = any>(
        request: A_PRODUCTS_SERVER_COMMANDS_TYPES__PageMigrateRequest,
        config?: A_AUTH_TYPES__APIProviderRequestConfig<M>
    ) {
        return await this
            .post<A_PRODUCTS_SERVER_COMMANDS_TYPES__PageMigrateResponse, M>(
                `/pages/migrate`,
                request,
                config
            );
    }
}

