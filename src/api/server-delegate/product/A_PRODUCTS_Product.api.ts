import { A_AUTH_ServerDelegate_APIProvider, A_AUTH_ServerDelegateAuthenticator, A_AUTH_TYPES__APIProviderRequestConfig } from "@adaas/a-auth";
import { A_PRODUCTS_ContextClass } from "@adaas/a-sdk/global/A_PRODUCTS_Context.class";
import {
    A_PRODUCTS_SERVER_DELEGATE_TYPES__ProductCreateRequest,
    A_PRODUCTS_SERVER_DELEGATE_TYPES__ProductCreateResponse,
    A_PRODUCTS_SERVER_DELEGATE_TYPES__ProductGetRequest,
    A_PRODUCTS_SERVER_DELEGATE_TYPES__ProductGetResponse,
    A_PRODUCTS_SERVER_DELEGATE_TYPES__ProductListRequest,
    A_PRODUCTS_SERVER_DELEGATE_TYPES__ProductListResponse,
    A_PRODUCTS_SERVER_DELEGATE_TYPES__ProductUpdateRequest,
    A_PRODUCTS_SERVER_DELEGATE_TYPES__ProductUpdateResponse
} from "./A_PRODUCTS_Product.types";
import { A_SDK_TYPES__Required } from "@adaas/a-sdk-types";




/**
 * API Provider for Products
 */
export class A_PRODUCTS_SERVER_DELEGATE__ProductAPI extends A_AUTH_ServerDelegate_APIProvider<A_PRODUCTS_ContextClass> {

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
        request: A_PRODUCTS_SERVER_DELEGATE_TYPES__ProductListRequest,
        config: A_SDK_TYPES__Required<A_AUTH_TYPES__APIProviderRequestConfig<M, A_AUTH_ServerDelegateAuthenticator>, ['authenticator']>
    ) {
        return await this
            .get<A_PRODUCTS_SERVER_DELEGATE_TYPES__ProductListResponse, M>(
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
        request: A_PRODUCTS_SERVER_DELEGATE_TYPES__ProductGetRequest,
        config: A_SDK_TYPES__Required<A_AUTH_TYPES__APIProviderRequestConfig<M, A_AUTH_ServerDelegateAuthenticator>, ['authenticator']>
    ) {
        return await this
            .get<A_PRODUCTS_SERVER_DELEGATE_TYPES__ProductGetResponse, M>(
                `/products/${request.aseid}`,
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
        request: A_PRODUCTS_SERVER_DELEGATE_TYPES__ProductCreateRequest,
        config: A_SDK_TYPES__Required<A_AUTH_TYPES__APIProviderRequestConfig<M, A_AUTH_ServerDelegateAuthenticator>, ['authenticator']>
    ) {
        return await this
            .post<A_PRODUCTS_SERVER_DELEGATE_TYPES__ProductCreateResponse, M>(
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
        request: A_PRODUCTS_SERVER_DELEGATE_TYPES__ProductUpdateRequest,
        config: A_SDK_TYPES__Required<A_AUTH_TYPES__APIProviderRequestConfig<M, A_AUTH_ServerDelegateAuthenticator>, ['authenticator']>
    ) {
        return await this
            .post<A_PRODUCTS_SERVER_DELEGATE_TYPES__ProductUpdateResponse, M>(
                `/products/${request.aseid}`,
                request,
                config
            );
    }
}

