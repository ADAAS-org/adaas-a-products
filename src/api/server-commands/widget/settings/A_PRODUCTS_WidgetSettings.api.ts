import { A_AUTH_ServerCommands_APIProvider, A_AUTH_TYPES__APIProviderRequestConfig } from "@adaas/a-auth";
import { A_PRODUCTS_ContextClass } from "@adaas/a-sdk/global/A_PRODUCTS_Context.class";
import {
    A_PRODUCTS_SERVER_COMMANDS_TYPES__WidgetSettingsGetRequest,
    A_PRODUCTS_SERVER_COMMANDS_TYPES__WidgetSettingsGetResponse,
    A_PRODUCTS_SERVER_COMMANDS_TYPES__WidgetSettingsUpdateRequest,
    A_PRODUCTS_SERVER_COMMANDS_TYPES__WidgetSettingsUpdateResponse
} from "./A_PRODUCTS_WidgetSettings.types";


export class A_PRODUCTS_SERVER_COMMANDS__WidgetSettingsAPI extends A_AUTH_ServerCommands_APIProvider<A_PRODUCTS_ContextClass> {

    protected get baseURL(): string {
        return this.context.getConfigurationProperty('API_LOCATION');
    }

    /**
     * 
     * This function is used to get widget settings
     * 
     * @param orgASEID 
     * @returns 
     */
    async load<M = any>(
        request: A_PRODUCTS_SERVER_COMMANDS_TYPES__WidgetSettingsGetRequest,
        config?: A_AUTH_TYPES__APIProviderRequestConfig<M>
    ) {
        return await this
            .get<A_PRODUCTS_SERVER_COMMANDS_TYPES__WidgetSettingsGetResponse, M>(
                `/widgets/${request.aseid}/settings`,
                {},
                config
            );
    }


    /**
     *  This function is used to update widget settings
     * 
     * @param request 
     * @param meta 
     * @returns 
     */
    async update<M = any>(
        request: A_PRODUCTS_SERVER_COMMANDS_TYPES__WidgetSettingsUpdateRequest,
        config?: A_AUTH_TYPES__APIProviderRequestConfig<M>
    ) {
        return await this
            .put<A_PRODUCTS_SERVER_COMMANDS_TYPES__WidgetSettingsUpdateResponse, M>(
                `/widgets/${request.aseid}/settings`,
                request.settings,
                config
            );
    }
}

