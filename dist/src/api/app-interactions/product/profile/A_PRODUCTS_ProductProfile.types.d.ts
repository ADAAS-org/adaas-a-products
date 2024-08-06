import { A_SDK_TYPES__DeepPartial } from "@adaas/a-sdk-types";
import { A_PRODUCTS_TYPES__Product_APIEntity } from "../A_PRODUCTS_Product.types";
export type A_PRODUCTS_TYPES__ProductProfile_APIEntity = {
    id: number;
    name: string;
    description: string;
    contact_email: string;
    website: string;
    logo_identity: string;
    Product: A_PRODUCTS_TYPES__Product_APIEntity;
    created_at: string;
    updated_at: string;
};
export type A_PRODUCTS_APP_INTERACTIONS_TYPES__ProductProfileGetRequest = {
    /**
     * Product identifier in ADAAS System
     */
    orgASEID: string;
};
export type A_PRODUCTS_APP_INTERACTIONS_TYPES__ProductProfileGetResponse = Partial<A_PRODUCTS_TYPES__ProductProfile_APIEntity>;
export type A_PRODUCTS_APP_INTERACTIONS_TYPES__ProductProfileUpdateRequest = {
    /**
     * Product identifier in ADAAS System
     */
    orgASEID: string;
    profile: A_SDK_TYPES__DeepPartial<A_PRODUCTS_TYPES__ProductProfile_APIEntity>;
};
export type A_PRODUCTS_APP_INTERACTIONS_TYPES__ProductProfileUpdateResponse = Partial<A_PRODUCTS_TYPES__ProductProfile_APIEntity>;
export type A_PRODUCTS_APP_INTERACTIONS_TYPES__ProductProfileLogoUploadRequest = {
    /**
     * Product identifier in ADAAS System
     */
    orgASEID: string;
    file: File;
};
export type A_PRODUCTS_APP_INTERACTIONS_TYPES__ProductProfileLogoUploadResponse = {
    logo_a_folder_aseid: string;
};
