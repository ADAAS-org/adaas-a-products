import { A_AUTH_ServerDelegate_APIProvider, A_AUTH_ServerDelegateAuthenticator, A_AUTH_TYPES__APIProviderRequestConfig } from "@adaas/a-auth";
import { A_PRODUCTS_ContextClass } from "@adaas/a-sdk/global/A_PRODUCTS_Context.class";
import {
    A_PRODUCTS_SERVER_DELEGATE_TYPES__ProductProfileGetRequest,
    A_PRODUCTS_SERVER_DELEGATE_TYPES__ProductProfileGetResponse,
    A_PRODUCTS_SERVER_DELEGATE_TYPES__ProductProfileLogoUploadRequest,
    A_PRODUCTS_SERVER_DELEGATE_TYPES__ProductProfileLogoUploadResponse,
    A_PRODUCTS_SERVER_DELEGATE_TYPES__ProductProfileUpdateRequest,
    A_PRODUCTS_SERVER_DELEGATE_TYPES__ProductProfileUpdateResponse
} from "./A_PRODUCTS_ProductProfile.types";
import { A_SDK_TYPES__Required } from "@adaas/a-sdk-types";

export class A_PRODUCTS_SERVER_DELEGATE__ProductProfileAPI extends A_AUTH_ServerDelegate_APIProvider<A_PRODUCTS_ContextClass> {

    protected get baseURL(): string {
        return this.context.getConfigurationProperty('API_LOCATION');
    }

    /**
     * 
     * This function is used to get product profile
     * 
     * @param orgASEID 
     * @returns 
     */
    async load<M = any>(
        request: A_PRODUCTS_SERVER_DELEGATE_TYPES__ProductProfileGetRequest,
         config: A_SDK_TYPES__Required<A_AUTH_TYPES__APIProviderRequestConfig<M, A_AUTH_ServerDelegateAuthenticator>, ['authenticator']>
    ) {
        return await this
            .get<A_PRODUCTS_SERVER_DELEGATE_TYPES__ProductProfileGetResponse, M>(
                `/products/${request.orgASEID}/profile`,
                {},
                config
            );
    }

    /**
     *  This function is used to upload product logo
     * 
     * @param request 
     * @param meta 
     * @returns 
     */
    async uploadLogo<M = any>(
        request: A_PRODUCTS_SERVER_DELEGATE_TYPES__ProductProfileLogoUploadRequest,
         config: A_SDK_TYPES__Required<A_AUTH_TYPES__APIProviderRequestConfig<M, A_AUTH_ServerDelegateAuthenticator>, ['authenticator']>
    ) {
        const formData = new FormData();
        formData.append('productLogo', request.file);

        return await this
            .post<A_PRODUCTS_SERVER_DELEGATE_TYPES__ProductProfileLogoUploadResponse, M>(
                `/products/${request.orgASEID}/profile/logo`,
                formData,
                {
                    ...config,
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }
            );
    }


    /**
     *  This function is used to update product profile
     * 
     * @param request 
     * @param meta 
     * @returns 
     */
    async update<M = any>(
        request: A_PRODUCTS_SERVER_DELEGATE_TYPES__ProductProfileUpdateRequest,
         config: A_SDK_TYPES__Required<A_AUTH_TYPES__APIProviderRequestConfig<M, A_AUTH_ServerDelegateAuthenticator>, ['authenticator']>
    ) {
        return await this
            .put<A_PRODUCTS_SERVER_DELEGATE_TYPES__ProductProfileUpdateResponse, M>(
                `/products/${request.orgASEID}/profile`,
                request.profile,
                config
            );
    }
}

