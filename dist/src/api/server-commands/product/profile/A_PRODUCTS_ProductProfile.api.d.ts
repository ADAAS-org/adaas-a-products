import { A_AUTH_AppInteractions_APIProvider, A_AUTH_TYPES__APIProviderRequestConfig } from "@adaas/a-auth";
import { A_PRODUCTS_ContextClass } from "../../../../global/A_PRODUCTS_Context.class";
import { A_PRODUCTS_SERVER_COMMANDS_TYPES__ProductProfileGetRequest, A_PRODUCTS_SERVER_COMMANDS_TYPES__ProductProfileLogoUploadRequest, A_PRODUCTS_SERVER_COMMANDS_TYPES__ProductProfileLogoUploadResponse, A_PRODUCTS_SERVER_COMMANDS_TYPES__ProductProfileUpdateRequest } from "./A_PRODUCTS_ProductProfile.types";
export declare class A_PRODUCTS_SERVER_COMMANDS__ProductProfileAPI extends A_AUTH_AppInteractions_APIProvider<A_PRODUCTS_ContextClass> {
    protected get baseURL(): string;
    /**
     *
     * This function is used to get product profile
     *
     * @param aseid
     * @returns
     */
    load<M = any>(request: A_PRODUCTS_SERVER_COMMANDS_TYPES__ProductProfileGetRequest, config?: A_AUTH_TYPES__APIProviderRequestConfig<M>): Promise<Partial<import("../../../app-interactions/index.types").A_PRODUCTS_TYPES__ProductProfile_APIEntity>>;
    /**
     *  This function is used to upload product logo
     *
     * @param request
     * @param meta
     * @returns
     */
    uploadLogo<M = any>(request: A_PRODUCTS_SERVER_COMMANDS_TYPES__ProductProfileLogoUploadRequest, config?: A_AUTH_TYPES__APIProviderRequestConfig<M>): Promise<A_PRODUCTS_SERVER_COMMANDS_TYPES__ProductProfileLogoUploadResponse>;
    /**
     *  This function is used to update product profile
     *
     * @param request
     * @param meta
     * @returns
     */
    update<M = any>(request: A_PRODUCTS_SERVER_COMMANDS_TYPES__ProductProfileUpdateRequest, config?: A_AUTH_TYPES__APIProviderRequestConfig<M>): Promise<Partial<import("../../../app-interactions/index.types").A_PRODUCTS_TYPES__ProductProfile_APIEntity>>;
}
