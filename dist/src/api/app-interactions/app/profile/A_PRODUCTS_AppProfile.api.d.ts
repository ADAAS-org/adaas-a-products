import { A_AUTH_AppInteractions_APIProvider } from "@adaas/a-auth";
import { A_PRODUCTS_ContextClass } from "../../../../global/A_PRODUCTS_Context.class";
import { A_PRODUCTS_APP_INTERACTIONS_TYPES__AppProfileGetRequest, A_PRODUCTS_APP_INTERACTIONS_TYPES__AppProfileLogoUploadRequest, A_PRODUCTS_APP_INTERACTIONS_TYPES__AppProfileLogoUploadResponse, A_PRODUCTS_APP_INTERACTIONS_TYPES__AppProfileUpdateRequest } from "./A_PRODUCTS_AppProfile.types";
export declare class A_PRODUCTS_APP_INTERACTIONS__AppProfileAPI extends A_AUTH_AppInteractions_APIProvider<A_PRODUCTS_ContextClass> {
    protected get baseURL(): string;
    /**
     *
     * This function is used to get app profile
     *
     * @param orgASEID
     * @returns
     */
    load<M = any>(request: A_PRODUCTS_APP_INTERACTIONS_TYPES__AppProfileGetRequest, 
    /**
     * The meta object to pass through API call for error handling or response handling
     */
    meta?: M): Promise<Partial<import("./A_PRODUCTS_AppProfile.types").A_PRODUCTS_TYPES__AppProfile_APIEntity>>;
    /**
     *  This function is used to upload app logo
     *
     * @param request
     * @param meta
     * @returns
     */
    uploadLogo<M = any>(request: A_PRODUCTS_APP_INTERACTIONS_TYPES__AppProfileLogoUploadRequest, 
    /**
     * The meta object to pass through API call for error handling or response handling
     */
    meta?: M): Promise<A_PRODUCTS_APP_INTERACTIONS_TYPES__AppProfileLogoUploadResponse>;
    /**
     *  This function is used to update app profile
     *
     * @param request
     * @param meta
     * @returns
     */
    update<M = any>(request: A_PRODUCTS_APP_INTERACTIONS_TYPES__AppProfileUpdateRequest, 
    /**
     * The meta object to pass through API call for error handling or response handling
     */
    meta?: M): Promise<Partial<import("./A_PRODUCTS_AppProfile.types").A_PRODUCTS_TYPES__AppProfile_APIEntity>>;
}
