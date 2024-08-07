import { A_AUTH_ServerDelegate_APIProvider, A_AUTH_ServerDelegateAuthenticator, A_AUTH_TYPES__APIProviderRequestConfig } from "@adaas/a-auth";
import { A_PRODUCTS_ContextClass } from "@adaas/a-sdk/global/A_PRODUCTS_Context.class";
import {
    A_PRODUCTS_SERVER_DELEGATE_TYPES__ProductSettingsGetRequest,
    A_PRODUCTS_SERVER_DELEGATE_TYPES__ProductSettingsGetResponse,
    A_PRODUCTS_SERVER_DELEGATE_TYPES__ProductSettingsUpdateRequest,
    A_PRODUCTS_SERVER_DELEGATE_TYPES__ProductSettingsUpdateResponse
} from "./A_PRODUCTS_ProductSettings.types";
import { A_SDK_TYPES__Required } from "@adaas/a-sdk-types";


export class A_PRODUCTS_SERVER_DELEGATE__ProductSettingsAPI extends A_AUTH_ServerDelegate_APIProvider<A_PRODUCTS_ContextClass> {

    protected get baseURL(): string {
        return this.context.getConfigurationProperty('API_LOCATION');
    }

    /**
     * 
     * This function is used to get product settings
     * 
     * @param aseid 
     * @returns 
     */
    async load<M = any>(
        request: A_PRODUCTS_SERVER_DELEGATE_TYPES__ProductSettingsGetRequest,
        config: A_SDK_TYPES__Required<A_AUTH_TYPES__APIProviderRequestConfig<M, A_AUTH_ServerDelegateAuthenticator>, ['authenticator']>
    ) {
        return await this
            .get<A_PRODUCTS_SERVER_DELEGATE_TYPES__ProductSettingsGetResponse, M>(
                `/products/${request.aseid}/settings`,
                {},
                config
            );
    }


    /**
     *  This function is used to update product settings
     * 
     * @param request 
     * @param meta 
     * @returns 
     */
    async update<M = any>(
        request: A_PRODUCTS_SERVER_DELEGATE_TYPES__ProductSettingsUpdateRequest,
        config: A_SDK_TYPES__Required<A_AUTH_TYPES__APIProviderRequestConfig<M, A_AUTH_ServerDelegateAuthenticator>, ['authenticator']>
    ) {
        return await this
            .put<A_PRODUCTS_SERVER_DELEGATE_TYPES__ProductSettingsUpdateResponse, M>(
                `/products/${request.aseid}/settings`,
                request.settings,
                config
            );
    }
}

