import { A_SDK_TYPES__DeepPartial } from "@adaas/a-sdk-types";
import { A_PRODUCTS_TYPES__ProductProfile_APIEntity } from "../../../app-interactions/index.types";
export type A_PRODUCTS_SERVER_DELEGATE_TYPES__ProductProfileGetRequest = {
    /**
     * Product identifier in ADAAS System
     */
    orgASEID: string;
};
export type A_PRODUCTS_SERVER_DELEGATE_TYPES__ProductProfileGetResponse = Partial<A_PRODUCTS_TYPES__ProductProfile_APIEntity>;
export type A_PRODUCTS_SERVER_DELEGATE_TYPES__ProductProfileUpdateRequest = {
    /**
     * Product identifier in ADAAS System
     */
    orgASEID: string;
    profile: A_SDK_TYPES__DeepPartial<A_PRODUCTS_TYPES__ProductProfile_APIEntity>;
};
export type A_PRODUCTS_SERVER_DELEGATE_TYPES__ProductProfileUpdateResponse = Partial<A_PRODUCTS_TYPES__ProductProfile_APIEntity>;
export type A_PRODUCTS_SERVER_DELEGATE_TYPES__ProductProfileLogoUploadRequest = {
    /**
     * Product identifier in ADAAS System
     */
    orgASEID: string;
    file: File;
};
export type A_PRODUCTS_SERVER_DELEGATE_TYPES__ProductProfileLogoUploadResponse = {
    logo_a_folder_aseid: string;
};
