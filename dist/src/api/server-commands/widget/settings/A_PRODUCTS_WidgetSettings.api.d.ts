import { A_AUTH_ServerCommands_APIProvider, A_AUTH_TYPES__APIProviderRequestConfig } from "@adaas/a-auth";
import { A_PRODUCTS_ContextClass } from "../../../../global/A_PRODUCTS_Context.class";
import { A_PRODUCTS_SERVER_COMMANDS_TYPES__WidgetSettingsGetRequest, A_PRODUCTS_SERVER_COMMANDS_TYPES__WidgetSettingsUpdateRequest } from "./A_PRODUCTS_WidgetSettings.types";
export declare class A_PRODUCTS_SERVER_COMMANDS__WidgetSettingsAPI extends A_AUTH_ServerCommands_APIProvider<A_PRODUCTS_ContextClass> {
    protected get baseURL(): string;
    /**
     *
     * This function is used to get widget settings
     *
     * @param orgASEID
     * @returns
     */
    load<M = any>(request: A_PRODUCTS_SERVER_COMMANDS_TYPES__WidgetSettingsGetRequest, config?: A_AUTH_TYPES__APIProviderRequestConfig<M>): Promise<Partial<import("../../../app-interactions/widget/settings/A_PRODUCTS_WidgetSettings.types").A_PRODUCTS_TYPES__WidgetSettings_APIEntity>>;
    /**
     *  This function is used to update widget settings
     *
     * @param request
     * @param meta
     * @returns
     */
    update<M = any>(request: A_PRODUCTS_SERVER_COMMANDS_TYPES__WidgetSettingsUpdateRequest, config?: A_AUTH_TYPES__APIProviderRequestConfig<M>): Promise<Partial<import("../../../app-interactions/widget/settings/A_PRODUCTS_WidgetSettings.types").A_PRODUCTS_TYPES__WidgetSettings_APIEntity>>;
}
