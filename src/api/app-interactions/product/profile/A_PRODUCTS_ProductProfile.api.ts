import { A_AUTH_AppInteractions_APIProvider } from "@adaas/a-auth";
import { A_PRODUCTS_ContextClass } from "@adaas/a-sdk/global/A_PRODUCTS_Context.class";
import {
    A_PRODUCTS_APP_INTERACTIONS_TYPES__ProductProfileGetRequest,
    A_PRODUCTS_APP_INTERACTIONS_TYPES__ProductProfileGetResponse,
    A_PRODUCTS_APP_INTERACTIONS_TYPES__ProductProfileLogoUploadRequest,
    A_PRODUCTS_APP_INTERACTIONS_TYPES__ProductProfileLogoUploadResponse,
    A_PRODUCTS_APP_INTERACTIONS_TYPES__ProductProfileUpdateRequest,
    A_PRODUCTS_APP_INTERACTIONS_TYPES__ProductProfileUpdateResponse
} from "./A_PRODUCTS_ProductProfile.types";

export class A_PRODUCTS_APP_INTERACTIONS__ProductProfileAPI extends A_AUTH_AppInteractions_APIProvider<A_PRODUCTS_ContextClass> {

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
        request: A_PRODUCTS_APP_INTERACTIONS_TYPES__ProductProfileGetRequest,
        /**
         * The meta object to pass through API call for error handling or response handling
         */
        meta?: M
    ) {
        return await this
            .get<A_PRODUCTS_APP_INTERACTIONS_TYPES__ProductProfileGetResponse, M>(
                `/products/${request.orgASEID}/profile`,
                {},
                {
                    meta
                }
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
        request: A_PRODUCTS_APP_INTERACTIONS_TYPES__ProductProfileLogoUploadRequest,
        /**
         * The meta object to pass through API call for error handling or response handling
         */
        meta?: M
    ) {
        const formData = new FormData();
        formData.append('productLogo', request.file);

        return await this
            .post<A_PRODUCTS_APP_INTERACTIONS_TYPES__ProductProfileLogoUploadResponse, M>(
                `/products/${request.orgASEID}/profile/logo`,
                formData,
                {
                    meta,
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
        request: A_PRODUCTS_APP_INTERACTIONS_TYPES__ProductProfileUpdateRequest,
        /**
         * The meta object to pass through API call for error handling or response handling
         */
        meta?: M
    ) {
        return await this
            .put<A_PRODUCTS_APP_INTERACTIONS_TYPES__ProductProfileUpdateResponse, M>(
                `/products/${request.orgASEID}/profile`,
                request.profile,
                {
                    meta
                }
            );
    }
}

