import { A_AUTH_AppInteractions_APIProvider, A_AUTH_TYPES__APIProviderRequestConfig } from "@adaas/a-auth";
import { A_PRODUCTS_ContextClass } from "@adaas/a-sdk/global/A_PRODUCTS_Context.class";
import {
    A_PRODUCTS_SERVER_COMMANDS_TYPES__ProductCreateRequest,
    A_PRODUCTS_SERVER_COMMANDS_TYPES__ProductCreateResponse,
    A_PRODUCTS_SERVER_COMMANDS_TYPES__ProductGetRequest,
    A_PRODUCTS_SERVER_COMMANDS_TYPES__ProductGetResponse,
    A_PRODUCTS_SERVER_COMMANDS_TYPES__ProductListRequest,
    A_PRODUCTS_SERVER_COMMANDS_TYPES__ProductListResponse,
    A_PRODUCTS_SERVER_COMMANDS_TYPES__ProductUpdateRequest,
    A_PRODUCTS_SERVER_COMMANDS_TYPES__ProductUpdateResponse
} from "./A_PRODUCTS_Product.types";




/**
 * API Provider for Products
 */
export class A_PRODUCTS_SERVER_COMMANDS__ProductAPI extends A_AUTH_AppInteractions_APIProvider<A_PRODUCTS_ContextClass> {

    protected get baseURL(): string {
        return this.context.getConfigurationProperty('API_LOCATION');
    }


    /**
     * Returns list of products based on User Access
     * 
     * @param request 
     * @param meta 
     * @returns 
     */
    async list<M = any>(
        request: A_PRODUCTS_SERVER_COMMANDS_TYPES__ProductListRequest,
        config?: A_AUTH_TYPES__APIProviderRequestConfig<M>
    ) {
        return await this
            .get<A_PRODUCTS_SERVER_COMMANDS_TYPES__ProductListResponse, M>(
                '/products',
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
        request: A_PRODUCTS_SERVER_COMMANDS_TYPES__ProductGetRequest,
        config?: A_AUTH_TYPES__APIProviderRequestConfig<M>
    ) {
        return await this
            .get<A_PRODUCTS_SERVER_COMMANDS_TYPES__ProductGetResponse, M>(
                `/products/${request.orgASEID}`,
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
        request: A_PRODUCTS_SERVER_COMMANDS_TYPES__ProductCreateRequest,
        config?: A_AUTH_TYPES__APIProviderRequestConfig<M>
    ) {
        return await this
            .post<A_PRODUCTS_SERVER_COMMANDS_TYPES__ProductCreateResponse, M>(
                `/products`,
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
        request: A_PRODUCTS_SERVER_COMMANDS_TYPES__ProductUpdateRequest,
        config?: A_AUTH_TYPES__APIProviderRequestConfig<M>
    ) {
        return await this
            .post<A_PRODUCTS_SERVER_COMMANDS_TYPES__ProductUpdateResponse, M>(
                `/products/${request.aseid}`,
                request,
                config
            );
    }
}

