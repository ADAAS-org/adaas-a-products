import { A_AUTH_ServerCommands_APIProvider, A_AUTH_TYPES__APIProviderRequestConfig } from "@adaas/a-auth";
import { A_PRODUCTS_ContextClass } from "../../../../global/A_PRODUCTS_Context.class";
import { A_PRODUCTS_SERVER_COMMANDS_TYPES__AppProfileGetRequest, A_PRODUCTS_SERVER_COMMANDS_TYPES__AppProfileLogoUploadRequest, A_PRODUCTS_SERVER_COMMANDS_TYPES__AppProfileLogoUploadResponse, A_PRODUCTS_SERVER_COMMANDS_TYPES__AppProfileUpdateRequest } from "./A_PRODUCTS_AppProfile.types";
export declare class A_PRODUCTS_SERVER_COMMANDS__AppProfileAPI extends A_AUTH_ServerCommands_APIProvider<A_PRODUCTS_ContextClass> {
    protected get baseURL(): string;
    /**
     *
     * This function is used to get app profile
     *
     * @param orgASEID
     * @returns
     */
    load<M = any>(request: A_PRODUCTS_SERVER_COMMANDS_TYPES__AppProfileGetRequest, config?: A_AUTH_TYPES__APIProviderRequestConfig<M>): Promise<Partial<import("../../../app-interactions/index.types").A_PRODUCTS_TYPES__AppProfile_APIEntity>>;
    /**
     *  This function is used to upload app logo
     *
     * @param request
     * @param meta
     * @returns
     */
    uploadLogo<M = any>(request: A_PRODUCTS_SERVER_COMMANDS_TYPES__AppProfileLogoUploadRequest, config?: A_AUTH_TYPES__APIProviderRequestConfig<M>): Promise<A_PRODUCTS_SERVER_COMMANDS_TYPES__AppProfileLogoUploadResponse>;
    /**
     *  This function is used to update app profile
     *
     * @param request
     * @param meta
     * @returns
     */
    update<M = any>(request: A_PRODUCTS_SERVER_COMMANDS_TYPES__AppProfileUpdateRequest, config?: A_AUTH_TYPES__APIProviderRequestConfig<M>): Promise<Partial<import("../../../app-interactions/index.types").A_PRODUCTS_TYPES__AppProfile_APIEntity>>;
}
