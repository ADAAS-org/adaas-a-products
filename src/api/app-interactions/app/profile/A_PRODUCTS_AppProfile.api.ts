import { A_AUTH_AppInteractions_APIProvider } from "@adaas/a-auth";
import { A_PRODUCTS_ContextClass } from "@adaas/a-sdk/global/A_PRODUCTS_Context.class";
import {
    A_PRODUCTS_APP_INTERACTIONS_TYPES__AppProfileGetRequest,
    A_PRODUCTS_APP_INTERACTIONS_TYPES__AppProfileGetResponse,
    A_PRODUCTS_APP_INTERACTIONS_TYPES__AppProfileLogoUploadRequest,
    A_PRODUCTS_APP_INTERACTIONS_TYPES__AppProfileLogoUploadResponse,
    A_PRODUCTS_APP_INTERACTIONS_TYPES__AppProfileUpdateRequest,
    A_PRODUCTS_APP_INTERACTIONS_TYPES__AppProfileUpdateResponse
} from "./A_PRODUCTS_AppProfile.types";

export class A_PRODUCTS_APP_INTERACTIONS__AppProfileAPI extends A_AUTH_AppInteractions_APIProvider<A_PRODUCTS_ContextClass> {

    protected get baseURL(): string {
        return this.context.getConfigurationProperty('API_LOCATION');
    }

    /**
     * 
     * This function is used to get organization profile
     * 
     * @param orgASEID 
     * @returns 
     */
    async load<M = any>(
        request: A_PRODUCTS_APP_INTERACTIONS_TYPES__AppProfileGetRequest,
        /**
         * The meta object to pass through API call for error handling or response handling
         */
        meta?: M
    ) {
        return await this
            .get<A_PRODUCTS_APP_INTERACTIONS_TYPES__AppProfileGetResponse, M>(
                `/organizations/${request.orgASEID}/profile`,
                {},
                {
                    meta
                }
            );
    }

    /**
     *  This function is used to upload organization logo
     * 
     * @param request 
     * @param meta 
     * @returns 
     */
    async uploadLogo<M = any>(
        request: A_PRODUCTS_APP_INTERACTIONS_TYPES__AppProfileLogoUploadRequest,
        /**
         * The meta object to pass through API call for error handling or response handling
         */
        meta?: M
    ) {
        const formData = new FormData();
        formData.append('organizationLogo', request.file);

        return await this
            .post<A_PRODUCTS_APP_INTERACTIONS_TYPES__AppProfileLogoUploadResponse, M>(
                `/organizations/${request.orgASEID}/profile/logo`,
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
     *  This function is used to update organization profile
     * 
     * @param request 
     * @param meta 
     * @returns 
     */
    async update<M = any>(
        request: A_PRODUCTS_APP_INTERACTIONS_TYPES__AppProfileUpdateRequest,
        /**
         * The meta object to pass through API call for error handling or response handling
         */
        meta?: M
    ) {
        return await this
            .put<A_PRODUCTS_APP_INTERACTIONS_TYPES__AppProfileUpdateResponse, M>(
                `/organizations/${request.orgASEID}/profile`,
                request.profile,
                {
                    meta
                }
            );
    }
}

