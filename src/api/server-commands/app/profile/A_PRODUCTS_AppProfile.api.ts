import { A_AUTH_ServerCommands_APIProvider, A_AUTH_TYPES__APIProviderRequestConfig } from "@adaas/a-auth";
import { A_PRODUCTS_ContextClass } from "@adaas/a-sdk/global/A_PRODUCTS_Context.class";
import {
    A_PRODUCTS_SERVER_COMMANDS_TYPES__AppProfileGetRequest,
    A_PRODUCTS_SERVER_COMMANDS_TYPES__AppProfileGetResponse,
    A_PRODUCTS_SERVER_COMMANDS_TYPES__AppProfileLogoUploadRequest,
    A_PRODUCTS_SERVER_COMMANDS_TYPES__AppProfileLogoUploadResponse,
    A_PRODUCTS_SERVER_COMMANDS_TYPES__AppProfileUpdateRequest,
    A_PRODUCTS_SERVER_COMMANDS_TYPES__AppProfileUpdateResponse
} from "./A_PRODUCTS_AppProfile.types";

export class A_PRODUCTS_SERVER_COMMANDS__AppProfileAPI extends A_AUTH_ServerCommands_APIProvider<A_PRODUCTS_ContextClass> {

    protected get baseURL(): string {
        return this.context.getConfigurationProperty('API_LOCATION');
    }

    /**
     * 
     * This function is used to get app profile
     * 
     * @param aseid 
     * @returns 
     */
    async load<M = any>(
        request: A_PRODUCTS_SERVER_COMMANDS_TYPES__AppProfileGetRequest,
        config?: A_AUTH_TYPES__APIProviderRequestConfig<M>
    ) {
        return await this
            .get<A_PRODUCTS_SERVER_COMMANDS_TYPES__AppProfileGetResponse, M>(
                `/apps/${request.aseid}/profile`,
                {},
                config
            );
    }

    /**
     *  This function is used to upload app logo
     * 
     * @param request 
     * @param meta 
     * @returns 
     */
    async uploadLogo<M = any>(
        request: A_PRODUCTS_SERVER_COMMANDS_TYPES__AppProfileLogoUploadRequest,
        config?: A_AUTH_TYPES__APIProviderRequestConfig<M>
    ) {
        const formData = new FormData();
        formData.append('appLogo', request.file);

        return await this
            .post<A_PRODUCTS_SERVER_COMMANDS_TYPES__AppProfileLogoUploadResponse, M>(
                `/apps/${request.aseid}/profile/logo`,
                formData,
                {
                    ...config,
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                },
            );
    }


    /**
     *  This function is used to update app profile
     * 
     * @param request 
     * @param meta 
     * @returns 
     */
    async update<M = any>(
        request: A_PRODUCTS_SERVER_COMMANDS_TYPES__AppProfileUpdateRequest,
        config?: A_AUTH_TYPES__APIProviderRequestConfig<M>
    ) {
        return await this
            .put<A_PRODUCTS_SERVER_COMMANDS_TYPES__AppProfileUpdateResponse, M>(
                `/apps/${request.aseid}/profile`,
                request.profile,
                config
            );
    }
}

