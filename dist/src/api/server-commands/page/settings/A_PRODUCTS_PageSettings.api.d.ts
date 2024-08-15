import { A_AUTH_ServerCommands_APIProvider, A_AUTH_TYPES__APIProviderRequestConfig } from "@adaas/a-auth";
import { A_PRODUCTS_ContextClass } from "../../../../global/A_PRODUCTS_Context.class";
import { A_PRODUCTS_SERVER_COMMANDS_TYPES__PageSettingsGetRequest, A_PRODUCTS_SERVER_COMMANDS_TYPES__PageSettingsUpdateRequest } from "./A_PRODUCTS_PageSettings.types";
export declare class A_PRODUCTS_SERVER_COMMANDS__PageSettingsAPI extends A_AUTH_ServerCommands_APIProvider<A_PRODUCTS_ContextClass> {
    protected get baseURL(): string;
    /**
     *
     * This function is used to get page settings
     *
     * @param orgASEID
     * @returns
     */
    load<M = any>(request: A_PRODUCTS_SERVER_COMMANDS_TYPES__PageSettingsGetRequest, config?: A_AUTH_TYPES__APIProviderRequestConfig<M>): Promise<Partial<import("../../../app-interactions/index.types").A_PRODUCTS_TYPES__PageSettings_APIEntity>>;
    /**
     *  This function is used to update page settings
     *
     * @param request
     * @param meta
     * @returns
     */
    update<M = any>(request: A_PRODUCTS_SERVER_COMMANDS_TYPES__PageSettingsUpdateRequest, config?: A_AUTH_TYPES__APIProviderRequestConfig<M>): Promise<Partial<import("../../../app-interactions/index.types").A_PRODUCTS_TYPES__PageSettings_APIEntity>>;
}
